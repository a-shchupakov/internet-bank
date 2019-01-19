import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import {MaskGenerator} from './mask-generator.interface';

@Directive({
    selector: '[appSpMask]'
})
export class MaskDirective {

    private static readonly ALPHA = 'A';
    private static readonly NUMERIC = '9';
    private static readonly ALPHANUMERIC = '?';
    private static readonly REGEX_MAP = new Map([
        [MaskDirective.ALPHA, /\w/],
        [MaskDirective.NUMERIC, /\d/],
        [MaskDirective.ALPHANUMERIC, /\w|\d/],
    ]);

    private value: string = null;
    private displayValue: string = null;

    @Input()
    public spMask: MaskGenerator;

    @Input()
    public spKeepMask: boolean;

    @Input('spMaskValue')
    public set maskValue(value: string) {
        if (value !== this.value) {
            this.value = value;
            this.defineValue();
        }
    }

    @Output()
    public spMaskValueChange = new EventEmitter<string>();



    private static processValue(displayValue: string, mask: string, keepMask: boolean) {
        const value = keepMask ? displayValue : MaskDirective.unmask(displayValue, mask);
        return value;
    }

    private static mask(value: string, mask: string): string {
        value = value.toString();

        let len = value.length;
        const maskLen = mask.length;
        let pos = 0;
        let newValue = '';

        for (let i = 0; i < Math.min(len, maskLen); i++) {
            const maskChar = mask.charAt(i);
            const newChar = value.charAt(pos);
            const regex: RegExp = MaskDirective.REGEX_MAP.get(maskChar);

            if (regex) {
                pos++;

                if (regex.test(newChar)) {
                    newValue += newChar;
                } else {
                    i--;
                    len--;
                }
            } else {
                if (maskChar === newChar) {
                    pos++;
                } else {
                    len++;
                }

                newValue += maskChar;
            }
        }

        return newValue;
    }

    private static unmask(maskedValue: string, mask: string): string {
        const maskLen = (mask && mask.length) || 0;
        return maskedValue.split('').filter(
            (currChar, idx) => (idx < maskLen) && MaskDirective.REGEX_MAP.has(mask[idx])
        ).join('');
    }

    private static delay(ms: number = 0): Promise<void> {
        return new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => null);
    }

    @HostListener('input', ['$event'])
    public onInput(event: { target: { value?: string }}): void {
        const target = event.target;
        const value = target.value;
        this.onValueChange(value);
    }

    constructor(private ngControl: NgControl) { }

    private updateValue(value: string) {
        this.value = value;
        this.spMaskValueChange.emit(value);
        MaskDirective.delay().then(
            () => this.ngControl.control.updateValueAndValidity()
        );
    }

    private defineValue() {
        let value: string = this.value;
        let displayValue: string = null;

        if (this.spMask) {
            const mask = this.spMask.generateMask(value);

            if (value != null) {
                displayValue = MaskDirective.mask(value, mask);
                value = MaskDirective.processValue(displayValue, mask, this.spKeepMask);
            }
        } else {
            displayValue = this.value;
        }

        MaskDirective.delay().then(() => {
            if (this.displayValue !== displayValue) {
                this.displayValue = displayValue;
                this.ngControl.control.setValue(displayValue);
                return MaskDirective.delay();
            }
        }).then(() => {
            if (value !== this.value) {
                return this.updateValue(value);
            }
        });
    }

    private onValueChange(newValue: string) {
        if (newValue !== this.displayValue) {
            let displayValue = newValue;
            let value = newValue;

            if ((newValue == null) || (newValue.trim() === '')) {
                value = null;
            } else if (this.spMask) {
                const mask = this.spMask.generateMask(newValue);
                displayValue = MaskDirective.mask(newValue, mask);
                value = MaskDirective.processValue(displayValue, mask, this.spKeepMask);
            }

            this.displayValue = displayValue;

            if (newValue !== displayValue) {
                this.ngControl.control.setValue(displayValue);
            }

            if (value !== this.value) {
                this.updateValue(value);
            }
        }
    }
}