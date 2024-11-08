class Matrix {


    async print() {
        this.#printUnlocking()
        await this.#sleep(2500)
        await this.#printBinary()
        await this.#sleep(1500)
        this.#printUnlocked()
    }

    async #printBinary() {
        const binarysLen = 18 * 9
        for (let i = 0; i < 400; i++) {
            const binarys = Array(binarysLen)
            for (let j = 1; j <= binarysLen; j++) {
                let binary = parseInt(Math.random() * 10) % 2 ? 0 : 1;
                if (j % 9 === 0) {
                    binary = ' '
                }
                binarys[j] = binary;                
            }


            console.log(binarys.join(''))
            await this.#sleep(50)
        }

        return true;
    }

    #sleep(miliseconds) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), miliseconds)
        })
    }

    #printUnlocking() {
        console.log('                                                                                                                                          ');
        console.log('                                                                                                                                          ');
        console.log('                                                                                                                                          ');
        console.log('     ██    ██ ███    ██ ██       ██████   ██████ ██   ██ ██ ███    ██  ██████      ███    ███  █████  ████████ ██████  ██ ██   ██              ');
        console.log('     ██    ██ ████   ██ ██      ██    ██ ██      ██  ██  ██ ████   ██ ██           ████  ████ ██   ██    ██    ██   ██ ██  ██ ██               ');
        console.log('     ██    ██ ██ ██  ██ ██      ██    ██ ██      █████   ██ ██ ██  ██ ██   ███     ██ ████ ██ ███████    ██    ██████  ██   ███                ');
        console.log('     ██    ██ ██  ██ ██ ██      ██    ██ ██      ██  ██  ██ ██  ██ ██ ██    ██     ██  ██  ██ ██   ██    ██    ██   ██ ██  ██ ██               ');
        console.log('      ██████  ██   ████ ███████  ██████   ██████ ██   ██ ██ ██   ████  ██████      ██      ██ ██   ██    ██    ██   ██ ██ ██   ██  ██ ██ ██ ');
        console.log('                                                                                                                                              ');
        console.log('                                                                                                                                          ');
        console.log('                                                                                                                                          ');
    }

    #printUnlocked() {
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('        ███    ███  █████  ████████ ██████  ██ ██   ██     ██    ██ ███    ██ ██       ██████   ██████ ██   ██ ███████ ██████  ██ ');
        console.log('        ████  ████ ██   ██    ██    ██   ██ ██  ██ ██      ██    ██ ████   ██ ██      ██    ██ ██      ██  ██  ██      ██   ██ ██ ');
        console.log('        ██ ████ ██ ███████    ██    ██████  ██   ███       ██    ██ ██ ██  ██ ██      ██    ██ ██      █████   █████   ██   ██ ██ ');
        console.log('        ██  ██  ██ ██   ██    ██    ██   ██ ██  ██ ██      ██    ██ ██  ██ ██ ██      ██    ██ ██      ██  ██  ██      ██   ██    ');
        console.log('        ██      ██ ██   ██    ██    ██   ██ ██ ██   ██      ██████  ██   ████ ███████  ██████   ██████ ██   ██ ███████ ██████  ██ ');
        console.log('                                                                                                                                  ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
        console.log('                                                                                                                          ');
    }

}

exports.Matrix = Matrix