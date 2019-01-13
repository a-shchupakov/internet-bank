import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'safety'})
export class SafetyPipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'небезопасный' : 'безопасный';
    }
}
