document.addEventListener('DOMContentLoaded', function (e) {
  document.getElementById("numbers").value = ""
  const RomanNumerals = {"lib": [[[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], [[900, "CM"], [400, "CD"], [90, "LC"], [40, "XL"], [9, "IX"], [4, "IV"], [1000, "M"], [500, "D"], [100, "C"], [50, "L"], [10, "X"], [5, "V"], [1, "I"]]]}
  RomanNumerals.toRoman = (v) => {
    let res = []; // Answer string
    if (Number.isInteger(v)) {
      RomanNumerals.lib[0].forEach((val) => {
        while (Math.floor(v / val[0]) > 0) {
          res.push(val[1])
          v -= val[0]
        }
      })
      return (res.join(""))
    } else {
      return "Not an arabic number!"
    }
  }

  RomanNumerals.fromRoman = (v) => {
    if (Number.isInteger(v) === false) {
      let res = 0; // Answer value
      RomanNumerals.lib[1].forEach((val) => {
        const checkLoop = () => {
          let int = v.search(val[1])
          if (int > -1) {
            res += val[0]
            v = v.replace(val[1], "")
            checkLoop() // Repeat check if still more equating letter values
          }
        }
        checkLoop()
      })
      return res
    } else {
      return "Not a roman numeral!"
    }
  }
  document.getElementById("submit").addEventListener("click", () => {
    let oldNum
    let newNum
    let checked = document.getElementById("encorDec").checked
    if (document.getElementById("numbers").value >= 0) {
      oldNum = parseInt(document.getElementById("numbers").value)
    } else {
      oldNum = document.getElementById("numbers").value.toUpperCase()
    }
    if (checked) {
      newNum = RomanNumerals.toRoman(oldNum)
    } else {
      newNum = RomanNumerals.fromRoman(oldNum)
    }
    document.getElementById("numbers").value = newNum
  });
})
