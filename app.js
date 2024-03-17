let form = document.querySelector(`form`);
let box = document.querySelector(`#box`);
let submitBtn = document.querySelector(`#submit-btn`);

form.addEventListener(`submit`, (event) => {
    let currency = event.target.currency.value;
    let merchandise = event.target.merchandise.value;
    let gold = event.target.gold.value;
    let goldRate = event.target.goldRate.value;
    let silver = event.target.silver.value;
    let silverRate = event.target.silverRate.value;

    // Condition 1 (only currency exists)
    if (currency !== `` && silver === `` && gold === `` && merchandise === ``) {
        console.log(`cond 1(Currency) is true`);
        if (silverRate === ``) {
            alert(`Please Enter Silver Rate (per tola)`);
        } else if ( parseFloat(currency) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = parseFloat(currency);
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 2 (only merchandise exists)
    if (merchandise !== `` && currency === `` && gold === `` && silver === ``) {
        console.log(`cond 2(Merchandise) is true`);
        if (silverRate === ``) {
            alert(`Please Enter Silver Rate (per tola)`);
        } else if ( parseFloat(merchandise) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = parseFloat(merchandise);
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 3 (only gold exists)
    if (gold !== `` && currency === `` && silver === `` && merchandise === ``) {
        console.log(`cond 3(Gold) is true`);
        if (parseFloat(gold) >= 7.5) {
            if (goldRate === ``) {
                alert(`Please Enter Gold Rate (per tola)`);
            } else {
                let goldPrice = parseFloat(gold) * parseFloat(goldRate);
                let totalAmount = goldPrice;
                let zakat = totalAmount / 40;
                box.innerText = zakat;
            }
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 4 (Only silver exists)
    if (silver !== `` && currency === `` && gold === `` && merchandise === ``) {
        console.log(`cond 4(Silver) is true`);
        if (parseFloat(silver) >= 52.5) {
            if (silverRate === ``) {
                alert(`Please Enter Silver Rate (per tola)`);
            } else {
                let silverPrice = parseFloat(silver) * parseFloat(silverRate);
                let totalAmount = silverPrice;
                let zakat = totalAmount / 40;
                box.innerText = zakat;
            }
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 5 (Currency & Merchendise exist and others are empty)
    if ((currency !== `` && merchandise !== ``) && (silver === `` && gold === ``)) {
        console.log(`cond 5(Currency & Merchendise) is true`);
        if (silverRate === ``) {
            alert(`Please Enter Silver Rate (per tola)`);
        } else if ( (parseFloat(currency) + parseFloat(merchandise)) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = (parseFloat(currency) + parseFloat(merchandise));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 6 (Currency & Gold exist and others are empty)
    if ((currency !== `` && gold !== ``) && (silver === `` && merchandise === ``)) {
        console.log(`cond 6(Currency & Gold) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( (parseFloat(currency) + (parseFloat(gold) * parseFloat(goldRate))) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = (parseFloat(currency) + (parseFloat(gold) * parseFloat(goldRate)));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 7 (Currency & Silver exist and others are empty)
    if ((currency !== `` && silver !== ``) && (merchandise === `` && gold === ``)) {
        console.log(`cond 7(Currency & Silver) is true`);
        if (silverRate === ``) {
            alert(`Please Enter Silver Rate (per tola)`);
        } else if ( (parseFloat(currency) + (parseFloat(silver) * parseFloat(silverRate))) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = (parseFloat(currency) + (parseFloat(silver) * parseFloat(silverRate)));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 8 (Merchandise & Gold exist and others are empty)
    if ((merchandise !== `` && gold !== ``) && (currency === `` && silver === ``)) {
        console.log(`cond 8(Merchandise & Gold) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( (parseFloat(merchandise) + (parseFloat(gold) * parseFloat(goldRate))) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = (parseFloat(merchandise) + (parseFloat(gold) * parseFloat(goldRate)));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 9 (Merchandise & Silver exist and others are empty)
    if ((merchandise !== `` && silver !== ``) && (currency === `` && gold === ``)) {
        console.log(`cond 9(Merchandise & Silver) is true`);
        if (silverRate === ``) {
            alert(`Please Enter Silver Rate (per tola)`);
        } else if ( (parseFloat(merchandise) + (parseFloat(silver) * parseFloat(silverRate))) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = (parseFloat(merchandise) + (parseFloat(silver) * parseFloat(silverRate)));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 10 (Gold & Silver exist and others are empty)
    if ((gold !== `` && silver !== ``) && (currency === `` && merchandise === ``)) {
        console.log(`cond 10(Gold & Silver) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate))) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 11 (currency & gold & silver exist and merchandise is empty)
    if ((currency !== `` && gold !== `` && silver !== ``) && merchandise === ``) {
        console.log(`cond 11(currency & gold & silver) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)) + parseFloat(currency)) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)) + parseFloat(currency));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 12 (currency & gold & merchandise exist and silver is empty)
    if ((currency !== `` && gold !== `` && merchandise !== ``) && silver === ``) {
        console.log(`cond 12(currency & gold & merchandise) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(currency)) + parseFloat(merchandise)) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(currency)) + parseFloat(merchandise));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 13 (currency & merchandise & silver exist and gold is empty)
    if ((currency !== `` && merchandise !== `` && silver !== ``) && gold === ``) {
        console.log(`cond 13(currency & merchandise & silver) is true`);
        if (silverRate === ``) {
            alert(`Please Enter Silver Rate (per tola)`);
        } else if ( ((parseFloat(silver) * parseFloat(silverRate)) + (parseFloat(currency)) + parseFloat(merchandise)) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = ((parseFloat(silver) * parseFloat(silverRate)) + (parseFloat(currency)) + parseFloat(merchandise));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 14 (gold & merchandise & silver exist and currency is empty)
    if ((gold !== `` && merchandise !== `` && silver !== ``) && silver === ``) {
        console.log(`cond 14(gold & merchandise & silver) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)) + parseFloat(merchandise)) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)) + parseFloat(merchandise));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }
    // Condition 15 (All fields are empty)
    else if ( (silver === `` && currency === `` && gold === `` && merchandise === `` && goldRate === `` && silverRate === ``) || ((silver === `` && currency === `` && gold === `` && merchandise === ``) && ((goldRate !== `` || silverRate !== ``) || (goldRate !== `` && silverRate !== ``))) ) {
        console.log(`Cond 15(All empty) is true`);
        alert(`Please fill out these fields below`)
    }
    // Condition 16 (All fields are filled)
    if ( (currency !== `` && merchandise !== `` && silver !== `` && gold !== ``) ) {
        console.log(`cond 16(All filled) is true`);
        if (silverRate === `` || goldRate === ``) {
            alert(`Please Enter Silver & Gold Rate (per tola)`);
        } else if ( ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)) + parseFloat(currency) + parseFloat(merchandise)) >= (parseFloat(silverRate) * 52.5)) {
            let totalAmount = ((parseFloat(gold) * parseFloat(goldRate)) + (parseFloat(silver) * parseFloat(silverRate)) + parseFloat(currency) + parseFloat(merchandise));
            let zakat = totalAmount / 40;
            box.innerText = zakat;
        } else {
            box.innerText = `No zakat`;
        }
    }

    event.preventDefault();
});