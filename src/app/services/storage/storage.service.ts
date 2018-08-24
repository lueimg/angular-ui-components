import { Injectable } from '@angular/core';
/**
 * Interface for Storing 2FA Info
 */
export interface I2FA {
    twoFactorToken: string;
    expiresOn: string;
    expiresIn: number;
};

@Injectable()
export class StorageService {

    storageKeys = {
        user: 'session.user',
        auth: 'session.auth',
        translations: 'session.translations',
        relationships: 'session.relationships',
        branding: 'session.branding',
        twofa: 'session.twofa',
        twofaUpdated: 'session.twofa-updated',
        displayNM: 'session.displayNM',
        coachTips: 'session.coachtips'
    };

    getTwoFA() {
        return localStorage.getItem(this.storageKeys.twofa);
    }

    setTwoFA(twofa: I2FA): void {
        if (twofa) {
            localStorage.setItem(this.storageKeys.twofa, JSON.stringify(twofa));
        } else {
            localStorage.removeItem(this.storageKeys.twofa);
        }
    }

    /**
     * Was 2FA code updated
     */
    getTwoFACodeUpdated() {
        if (localStorage.getItem(this.storageKeys.twofaUpdated)) {
            return localStorage.getItem(this.storageKeys.twofaUpdated);
        }
        return false;
    }

    /**
     * Set 2FA code updated flag
     */
    setTwoFACodeUpdated(updated: boolean = false): void {
        localStorage.setItem(this.storageKeys.twofaUpdated, JSON.stringify(updated));
    }

    getCoachTips() {
        const coachTips = localStorage.getItem(this.storageKeys.coachTips);
        if (coachTips) {
            return JSON.parse(coachTips);
        } else {
            // show CoachTips by default
            this.setCoachTips(true);
            return true;
        }
    }

    setCoachTips(value: boolean) {
        return localStorage.setItem(this.storageKeys.coachTips, JSON.stringify(value));
    }
    cleanCoachTipsStorage() {
        localStorage.removeItem(this.storageKeys.coachTips);
    }
}
