const dns = require('dns').promises;

// dns.promises.lookup()

// async function getIP(domain) {
//   try {
//     const result = await dns.lookup(domain);
//     const inf = {
//         ip: result.address,
//         type: result.family
//     }
//     return inf;
//   } catch (error) {
//     console.error('Erro no lookup:', error);
//   }
// }

// (async () => {
//   const ip = await getIP('wqd.com.br');
//   console.log(ip);
// })();



// dns.promises.resolve4()

// async function getIPv4(domain) {
//   try {
//     const addresses = await dns.resolve4(domain);
//     return addresses;
//   } catch (error) {
//     console.error('Erro resolve4:', error);
//   }
// }

// (async () => {
//   const ips = await getIPv4('google.com');
//   console.log(ips);
// })();



// dns.promises.resolve6()

// async function getIPv6(domain) {
//   try {
//     const addresses = await dns.resolve6(domain);
//     return addresses;
//   } catch (error) {
//     console.error('Erro resolve6:', error);
//   }
// }

// (async () => {
//   const ips = await getIPv6('google.com');
//   console.log(ips);
// })();



// dns.promises.Mx()

async function getMailServers(domain) {
  try {
    const records = await dns.resolveMx(domain);
    return records;
  } catch (error) {
    console.error('Erro resolveMx:', error);
  }
}

(async () => {
  const mx = await getMailServers('devjuliocesarrgmail.com');
  console.log(mx);
})();



// dns.promises.Txt()

// async function getTxtRecords(domain) {
//   try {
//     const records = await dns.resolveTxt(domain);
//     return records;
//   } catch (error) {
//     console.error('Erro resolveTxt:', error);
//   }
// }

// (async () => {
//   const txt = await getTxtRecords('google.com');
//   console.log(txt);
// })();



// dns.promises.reverse()

// async function reverseIP(ip) {
//   try {
//     const hostnames = await dns.reverse(ip);
//     return hostnames;
//   } catch (error) {
//     console.error('Erro reverse:', error);
//   }
// }

// (async () => {
//   const hosts = await reverseIP('8.8.8.8');
//   console.log(hosts);
// })();
