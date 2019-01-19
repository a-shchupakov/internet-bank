import {MaskGenerator} from './mask-generator.interface';

export class MyMaskUtil {
    private static PHONE = '+7 (999) 999-99-99';
    private static EXPIRES = '99/99';
    private static CARD_NUMBER = '9999 9999 9999 9999';

    public static PHONE_MASK_GENERATOR: MaskGenerator = {
        generateMask: () =>  MyMaskUtil.PHONE,
    };

    public static EXPIRES_MASK_GENERATOR: MaskGenerator = {
        generateMask: () =>  MyMaskUtil.EXPIRES,
    };

    public static CARD_MASK_GENERATOR: MaskGenerator = {
        generateMask: () =>  MyMaskUtil.CARD_NUMBER,
    };
}
