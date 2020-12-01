
const input = [1655,1384,1752,1919,1972,1766,1852,1835,1408,1721,1879,1846,1394,1577,1588,1097,1748,1585,765,1375,1806,1785,1824,1847,1037,1531,1989,1570,1625,1600,1832,1927,1691,1593,1936,1812,570,1391,1883,1592,1875,1185,1903,855,1331,1742,1884,1356,1944,1994,1556,1271,1572,1661,1914,1905,1581,1634,1252,1657,989,1907,1998,1040,1833,1612,1725,1680,1869,1900,1550,1768,1727,1930,1810,1841,734,1779,1774,1825,1446,1259,1552,1310,1885,1689,1929,1959,787,1642,1890,1164,1986,1796,1465,1217,1741,1480,1683,1808,1058,1970,1361,2003,1898,1668,1754,1773,1235,1158,1975,1479,1995,1648,1023,883,1553,1658,1794,1747,1978,1268,1966,1192,1886,1471,1548,1819,1551,1958,1732,1676,1745,1501,1858,1652,1596,473,1314,1814,1409,1877,1344,1735,1635,1273,871,1643,1599,1565,1695,1803,1764,1778,1823,1831,1701,282,1089,1623,1639,1568,1469,1674,1818,1992,1597,1711,1359,1851,1496,1630,1755,1529,1881,1718,1916,1325,1578,1441,1722,1545,1472,1783,1497,1791,1183,1926,1937,1255,1095,1451,1395,1665,1432,1693,1821,1938,1941,2002]

input.sort(function(a, b){return a-b})

console.log(input[0])

let lastIndex = input.length - 1;

/**
 * This method iterates through the different numbers in the array and if they add up to 2020, returns them
 * @param {int} i1 - First index to check against 
 * @param {int} i2 - Last index to check against
 */
function find2020PartOne(i1, i2) {
	if (input[i1] + input[i2] == 2020) {
        console.log(`Part 1 Answer: ${input[i1]}*${input[i2]}=${input[i1] * input[i2]}`);
	}
	else if (input[i1] + input[i2] > 2020) {
		find2020PartOne(i1, i2 - 1)
	}
	else {
		find2020PartOne(i1 + 1, i2)
	}
}

/**
 * This method iterates through the different numbers in the array with a walking value to allow for the third integer
 * @param {int} i1 - First index to check against
 * @param {int} w1 - Walking index to check against, to get the floating value
 * @param {int} i2 - Last index to check against     
 */
function find2020PartTwo(i1, w1, i2) {
    if(input[i1] + input[w1] + input[i2] == 2020) {
        console.log(`Part 1 Answer: ${input[i1]}*${input[i2]}*${input[w1]}=${input[i1] * input[i2] * input[w1]}`);
    } else if(input[i1] + input[w1] + input[i2] > 2020) {
        if (w1 == i2 - 1) {
            find2020PartTwo(i1 - 1, w1 + 1, input.length - 1);
        } else {
            find2020PartTwo(i1, w1, i2 - 1);
        }
    } else {
        if (w1 + 1 == i2) {
            find2020PartTwo(i1 + 1, w1, input.length - 1);
        } else {
            find2020PartTwo(i1, w1 + 1, i2);
        }
    }
}

find2020PartOne(0, lastIndex);
find2020PartTwo(0, 1, lastIndex);