module.exports = (function() {

    // based on: https://github.com/jeanlescure/short-unique-id/blob/master/src/short-unique-id.js

    return function() {

        const self = this;

        const DEFAULT_RANDOM_ID_LEN = 9;

        // Generate Dictionary.
        const dict = [];
        let dictLength = 0;
        const acceptedAlpha = 'ABCDEFGHJKMNPQRSTUVWXYZ';
        const acceptedNumbers = '23456789';
        const separator = '-';

        function init() {
            for (let i = 0; i < acceptedAlpha.length; i++) {
                dict.push(acceptedAlpha.charAt(i));
            }
            for (let i = 0; i < acceptedNumbers.length; i++) {
                dict.push(acceptedNumbers.charAt(i));
            }

            // Shuffle Dictionary for removing selection bias.
            dict.sort(() => Math.random() <= 0.5);

            // Cache Dictionary Length for future usage.
            dictLength = dict.length;
        }

        /**
         * Generates UUID by creating each part randomly.
         * @param {Integer} uuidLength Desired UUID length.
         */
        this.randomUUID = function(uuidLength) {
            let tokenLength = uuidLength;
            if (tokenLength === null || typeof tokenLength === 'undefined') {
                tokenLength = DEFAULT_RANDOM_ID_LEN;
            }
            if (tokenLength < 1) {
                throw new Error('Invalid UUID Length Provided');
            }

            // Generate random ID parts from Dictionary.
            let id = '';
            for (let _j = 0; _j < tokenLength; ++_j) {
                const randomPartIdx = parseInt(Math.random() * dictLength, 10) % dictLength;
                id += dict[randomPartIdx];
            }

            // Return random generated ID.
            return id;
        };

        this.generate = function() {
            const token = self.randomUUID(9);
            return token.substring(0, 3) + separator + token.substring(3, 6) + separator + token.substring(6, 9);
        };

        init();

    };

})();
