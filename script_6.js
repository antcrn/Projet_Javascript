//UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
//CCU ou CCC ou CCA ou CCG => Proline
//UUA || UUG => Leucine
//UUU || UUC => Phénylalanine
//CGU || CGC || CGA || CGG || AGA || AGG => Arginine
//UAU || UAC => Tyrosine

function decryptARN(arn) {
    let nucloides = [];
    nucloides.push(arn.match(/.{1,3}/g));
    let nucloARN = []

    nucloides.forEach(function(nuclo) {
        for (var i = nuclo.length - 1; i >= 0; i--) {
            switch (nuclo[i]) {
                case "UCU":
                case "UCC":
                case "UCA":
                case "UCG":
                case "AGU":
                case "AGC":
                    nucloARN.push("Sérine");
                    break;
                case "CCU":
                case "CCC":
                case "CCA":
                case "CCG":
                    nucloARN.push("Proline")
                    break;
                case "UUA":
                case "UUG":
                    nucloARN.push("Leucine")
                    break;
                case "CGU":
                case "CGC":
                case "CGA":
                case "CGG":
                case "AGA":
                case "AGG":
                    nucloARN.push("Arginine");
                    break;
                case "UAU":
                case "UAC":
                    nucloARN.push("Tyrosine")
                    break;
            }
        }

    })
    console.log(nucloARN.join('-'))
}
decryptARN("CCGUCGUUGCGCUACAGC");
decryptARN("UUACGCAGUAGA");
decryptARN("CCUCGCCGGUACUUCUCG");