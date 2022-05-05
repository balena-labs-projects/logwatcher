import { convertToSentryEvent } from './eventConverter';

const events = [
	{
		level: 'critical',
		message: {
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			__MONOTONIC_TIMESTAMP: '174601068445',
			_CAP_EFFECTIVE: '1ffffffffff',
			_TRANSPORT: 'journal',
			_UID: '0',
			_COMM: 'balenad',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_HOSTNAME: '0daeb01',
			__REALTIME_TIMESTAMP: '1651753581738685',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_SLICE: 'system.slice',
			_PID: '899',
			PRIORITY: '6',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_GID: '0',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			CONTAINER_TAG: '9e55b65728d7',
			_SOURCE_REALTIME_TIMESTAMP: '1651753581738585',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be72;b=53771babcbc44a298bb35a0e0207a58e;m=28a708df9d;t=5de42d97efabd;x=ec25353b1a2c6f1b',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_ID: '9e55b65728d7',
			MESSAGE:
				'2022-05-04T12:52:17.173Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-9wdk7-49.3.16]: Unhandled Server Error {"length":171,"name":"error","severity":"ERROR","code":"42703","hint":"Perhaps you meant to reference the column "cards.links".","position":"7856","file":"parse_relation.c","line":"3514","routine":"errorMissingColumn"}\r',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			_EXE: '/usr/bin/balena-engine',
		},
	},
	{
		level: 'fatal',
		message: {
			__REALTIME_TIMESTAMP: '1651753583790795',
			MESSAGE:
				"[Thu May 05 12:26:13 2022] [error:emerg] [pid 373:tid 1170] [client 99.247.74.199:45324] You can't hack the microchip without bypassing the auxiliary SMTP pixel!\r",
			_EXE: '/usr/bin/balena-engine',
			_CAP_EFFECTIVE: '1ffffffffff',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_SLICE: 'system.slice',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			CONTAINER_TAG: 'a95a424ff34f',
			SYSLOG_IDENTIFIER: 'a95a424ff34f',
			_GID: '0',
			_HOSTNAME: '0daeb01',
			_SOURCE_REALTIME_TIMESTAMP: '1651753583790781',
			PRIORITY: '6',
			_COMM: 'balenad',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_UID: '0',
			CONTAINER_NAME:
				'apache_error_4863684_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be75;b=53771babcbc44a298bb35a0e0207a58e;m=28a7282fab;t=5de42d99e4acb;x=2599625a01459981',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__MONOTONIC_TIMESTAMP: '174603120555',
			_PID: '899',
			CONTAINER_ID: 'a95a424ff34f',
			_TRANSPORT: 'journal',
			CONTAINER_ID_FULL:
				'a95a424ff34f4b296697bfd0e210ccc49dc1fdef64c3b2e4113901338cd2d742',
		},
	},
	{
		level: 'info',
		message: {
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_NAME:
				'apache_combined_4863686_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			__REALTIME_TIMESTAMP: '1651753585125438',
			_UID: '0',
			__MONOTONIC_TIMESTAMP: '174604455197',
			_SOURCE_REALTIME_TIMESTAMP: '1651753585125275',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_CAP_EFFECTIVE: '1ffffffffff',
			_HOSTNAME: '0daeb01',
			_PID: '899',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_TRANSPORT: 'journal',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_ID: '687b503f817d',
			PRIORITY: '6',
			CONTAINER_ID_FULL:
				'687b503f817d5329ffad0c39443ed30debbec7b8d7c7afd38e2d42d0d25f0f20',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			SYSLOG_IDENTIFIER: '687b503f817d',
			_SYSTEMD_UNIT: 'balena.service',
			_COMM: 'balenad',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be78;b=53771babcbc44a298bb35a0e0207a58e;m=28a73c8d1d;t=5de42d9b2a83e;x=51913b7679bebf84',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_GID: '0',
			CONTAINER_TAG: '687b503f817d',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'88.190.153.72 - wunsch6707 [05/May/2022:12:26:15 +0000] "PATCH /synthesize/cutting-edge/real-time/holistic HTTP/1.0" 500 27677 "https://www.districtsynergize.net/next-generation/dynamic/one-to-one/scale" "Opera/9.67 (Macintosh; U; Intel Mac OS X 10_8_5; en-US) Presto/2.8.301 Version/11.00"\r',
		},
	},
	{
		level: 'info',
		message: {
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_HOSTNAME: '0daeb01',
			_EXE: '/usr/bin/balena-engine',
			_PID: '899',
			__REALTIME_TIMESTAMP: '1651753585164913',
			PRIORITY: '6',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be79;b=53771babcbc44a298bb35a0e0207a58e;m=28a73d2750;t=5de42d9b34271;x=62041fe498c0eb3b',
			MESSAGE:
				'39.112.73.121 - - [05/May/2022:12:26:15 +0000] "HEAD /e-business/whiteboard HTTP/2.0" 304 8813\r',
			_SYSTEMD_SLICE: 'system.slice',
			_GID: '0',
			_SOURCE_REALTIME_TIMESTAMP: '1651753585164821',
			__MONOTONIC_TIMESTAMP: '174604494672',
			CONTAINER_NAME:
				'apache_common_4863685_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_ID: '4d7eb127f184',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_ID_FULL:
				'4d7eb127f1849accf836654baff75107f53da0a28eb1fdd1b08bd2fdf4c10ecf',
			_TRANSPORT: 'journal',
			_UID: '0',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_COMM: 'balenad',
			SYSLOG_IDENTIFIER: '4d7eb127f184',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_TAG: '4d7eb127f184',
		},
	},
	{
		level: 'info',
		message: {
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_NAME:
				'rfc5424_4863688_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_GID: '0',
			_COMM: 'balenad',
			_SOURCE_REALTIME_TIMESTAMP: '1651753585353933',
			_TRANSPORT: 'journal',
			CONTAINER_ID_FULL:
				'85e43c520374fb2b0f7b53d8e4cf059908856bad8ba8443c4e27176dc207b93d',
			CONTAINER_TAG: '85e43c520374',
			_CAP_EFFECTIVE: '1ffffffffff',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_UID: '0',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			__MONOTONIC_TIMESTAMP: '174604683756',
			_PID: '899',
			CONTAINER_ID: '85e43c520374',
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'<93>2 2022-05-05T12:26:15.260Z chiefworld-class.biz ratione 4496 ID777 - Try to back up the RSS sensor, maybe it will transmit the multi-byte pixel!\r',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be7a;b=53771babcbc44a298bb35a0e0207a58e;m=28a74009ec;t=5de42d9b6250c;x=f6e71726032d334f',
			PRIORITY: '6',
			SYSLOG_IDENTIFIER: '85e43c520374',
			__REALTIME_TIMESTAMP: '1651753585353996',
			_HOSTNAME: '0daeb01',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
		},
	},
	{
		level: 'info',
		message: {
			PRIORITY: '6',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be81;b=53771babcbc44a298bb35a0e0207a58e;m=28a742396f;t=5de42d9b85490;x=7225a99052a414da',
			__MONOTONIC_TIMESTAMP: '174604826991',
			_GID: '0',
			CONTAINER_NAME:
				'rfc3164_4863687_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			_TRANSPORT: 'journal',
			_SOURCE_REALTIME_TIMESTAMP: '1651753585497161',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_SYSTEMD_SLICE: 'system.slice',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_UID: '0',
			CONTAINER_ID: 'e98be0cc5b7f',
			SYSLOG_IDENTIFIER: 'e98be0cc5b7f',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			CONTAINER_TAG: 'e98be0cc5b7f',
			__REALTIME_TIMESTAMP: '1651753585497232',
			_PID: '899',
			CONTAINER_ID_FULL:
				'e98be0cc5b7fb7d37ed6f350c1e293ddf4fc2a1400115f99dde3bcf106bdd843',
			_COMM: 'balenad',
			MESSAGE:
				'<36>May 05 12:26:15 gerlach7108 perspiciatis[2676]: If we parse the port, we can get to the ADP panel through the optical XSS monitor!\r',
			_EXE: '/usr/bin/balena-engine',
			_HOSTNAME: '0daeb01',
		},
	},
	{
		level: 'info',
		message: {
			CONTAINER_NAME: 'json_4863689_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			SYSLOG_IDENTIFIER: '8eb1bcb68727',
			_PID: '899',
			_UID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_ID: '8eb1bcb68727',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_TRANSPORT: 'journal',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_SOURCE_REALTIME_TIMESTAMP: '1651753585529799',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_TAG: '8eb1bcb68727',
			PRIORITY: '6',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be82;b=53771babcbc44a298bb35a0e0207a58e;m=28a742b94c;t=5de42d9b8d46c;x=68f65777888e87d4',
			_HOSTNAME: '0daeb01',
			__REALTIME_TIMESTAMP: '1651753585529964',
			_GID: '0',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'{"host":"91.80.63.97", "user-identifier":"-", "datetime":"05/May/2022:12:26:15 +0000", "method": "POST", "request": "/experiences/iterate/global/monetize", "protocol":"HTTP/1.1", "status":302, "bytes":24808, "referer": "https://www.internationalworld-class.name/markets/ubiquitous/innovate/transform"}\r',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			__MONOTONIC_TIMESTAMP: '174604859724',
			_COMM: 'balenad',
			CONTAINER_ID_FULL:
				'8eb1bcb687275a0157cd32c2acf387b94d969c2d642b4cef6d7faf4fc3b79fdb',
		},
	},
	{
		level: 'debug',
		message: {
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be87;b=53771babcbc44a298bb35a0e0207a58e;m=28a7553a7e;t=5de42d9cb559e;x=bd2d40f44af78184',
			_SOURCE_REALTIME_TIMESTAMP: '1651753586742571',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_SLICE: 'system.slice',
			PRIORITY: '6',
			_UID: '0',
			_EXE: '/usr/bin/balena-engine',
			_TRANSPORT: 'journal',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__REALTIME_TIMESTAMP: '1651753586742686',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_ID: '9e55b65728d7',
			MESSAGE:
				'[Wed May 04 19:49:22 2022] [eveniet:debug] [pid 8854:tid 6233] [client 254.130.101.151:22531] Try to program the SMTP circuit, maybe it will bypass the wireless matrix!\r',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_COMM: 'balenad',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			__MONOTONIC_TIMESTAMP: '174606072446',
			_SYSTEMD_UNIT: 'balena.service',
			_PID: '899',
			CONTAINER_TAG: '9e55b65728d7',
			_HOSTNAME: '0daeb01',
			_GID: '0',
		},
	},
	{
		level: 'info',
		message: {
			_TRANSPORT: 'journal',
			_HOSTNAME: '0daeb01',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			_SYSTEMD_SLICE: 'system.slice',
			_SOURCE_REALTIME_TIMESTAMP: '1651753591748645',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be8a;b=53771babcbc44a298bb35a0e0207a58e;m=28a7a19d4c;t=5de42da17b865;x=11592af038ce7fcd',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_CAP_EFFECTIVE: '1ffffffffff',
			_PID: '899',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_TAG: '9e55b65728d7',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			__REALTIME_TIMESTAMP: '1651753591748709',
			_COMM: 'balenad',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			PRIORITY: '6',
			_UID: '0',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			MESSAGE:
				'<30>1 2022-05-04T20:05:22.039Z internationalschemas.name est 7729 ID625 - Try to compress the PNG matrix, maybe it will compress the solid state transmitter!\r\r',
			_GID: '0',
			__MONOTONIC_TIMESTAMP: '174611078476',
			_SYSTEMD_UNIT: 'balena.service',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			CONTAINER_ID: '9e55b65728d7',
		},
	},
	{
		level: 'info',
		message: {
			_EXE: '/usr/bin/balena-engine',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_UID: '0',
			_GID: '0',
			CONTAINER_TAG: 'a95a424ff34f',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_COMM: 'balenad',
			_SOURCE_REALTIME_TIMESTAMP: '1651753593791800',
			_PID: '899',
			MESSAGE:
				'[Thu May 05 12:26:23 2022] [atque:trace1-8] [pid 2362:tid 3496] [client 128.3.242.200:38943] Try to copy the AGP firewall, maybe it will generate the open-source bandwidth!\r',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_ID: 'a95a424ff34f',
			CONTAINER_NAME:
				'apache_error_4863684_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			__REALTIME_TIMESTAMP: '1651753593792031',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be8d;b=53771babcbc44a298bb35a0e0207a58e;m=28a7c0caff;t=5de42da36e61f;x=55aa59d7ba907d68',
			_TRANSPORT: 'journal',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			_CAP_EFFECTIVE: '1ffffffffff',
			__MONOTONIC_TIMESTAMP: '174613121791',
			_HOSTNAME: '0daeb01',
			SYSLOG_IDENTIFIER: 'a95a424ff34f',
			CONTAINER_ID_FULL:
				'a95a424ff34f4b296697bfd0e210ccc49dc1fdef64c3b2e4113901338cd2d742',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
		},
	},
	{
		level: 'info',
		message: {
			MESSAGE:
				'20.170.252.30 - - [05/May/2022:12:26:25 +0000] "GET /mesh/one-to-one/users/value-added HTTP/2.0" 200 47574 "http://www.directleverage.info/extend/compelling" "Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_7_7) AppleWebKit/5322 (KHTML, like Gecko) Chrome/37.0.836.0 Mobile Safari/5322"\r',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_TAG: '687b503f817d',
			CONTAINER_ID: '687b503f817d',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_COMM: 'balenad',
			CONTAINER_NAME:
				'apache_combined_4863686_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			SYSLOG_IDENTIFIER: '687b503f817d',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SOURCE_REALTIME_TIMESTAMP: '1651753595125544',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_TRANSPORT: 'journal',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_HOSTNAME: '0daeb01',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be90;b=53771babcbc44a298bb35a0e0207a58e;m=28a7d52418;t=5de42da4b3f39;x=8b0175e95bdd852',
			_SYSTEMD_SLICE: 'system.slice',
			_CAP_EFFECTIVE: '1ffffffffff',
			PRIORITY: '6',
			CONTAINER_ID_FULL:
				'687b503f817d5329ffad0c39443ed30debbec7b8d7c7afd38e2d42d0d25f0f20',
			_PID: '899',
			__MONOTONIC_TIMESTAMP: '174614455320',
			__REALTIME_TIMESTAMP: '1651753595125561',
			_UID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			_GID: '0',
		},
	},
	{
		level: 'info',
		message: {
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_SLICE: 'system.slice',
			_UID: '0',
			__REALTIME_TIMESTAMP: '1651753595165166',
			PRIORITY: '6',
			CONTAINER_TAG: '4d7eb127f184',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_HOSTNAME: '0daeb01',
			_GID: '0',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_ID_FULL:
				'4d7eb127f1849accf836654baff75107f53da0a28eb1fdd1b08bd2fdf4c10ecf',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			SYSLOG_IDENTIFIER: '4d7eb127f184',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_PID: '899',
			CONTAINER_NAME:
				'apache_common_4863685_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be91;b=53771babcbc44a298bb35a0e0207a58e;m=28a7d5bece;t=5de42da4bd9ee;x=4b53a78cc02360a9',
			MESSAGE:
				'83.169.92.84 - breitenberg5438 [05/May/2022:12:26:25 +0000] "DELETE /e-tailers HTTP/2.0" 406 29876\r',
			CONTAINER_ID: '4d7eb127f184',
			_COMM: 'balenad',
			_TRANSPORT: 'journal',
			_SOURCE_REALTIME_TIMESTAMP: '1651753595165150',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__MONOTONIC_TIMESTAMP: '174614494926',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
		},
	},
	{
		level: 'info',
		message: {
			PRIORITY: '6',
			_GID: '0',
			CONTAINER_TAG: '85e43c520374',
			__MONOTONIC_TIMESTAMP: '174614684840',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_NAME:
				'rfc5424_4863688_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_SYSTEMD_UNIT: 'balena.service',
			MESSAGE:
				'<135>2 2022-05-05T12:26:25.260Z chiefintuitive.biz nihil 7932 ID28 - If we connect the firewall, we can get to the RSS array through the multi-byte USB circuit!\r',
			_CAP_EFFECTIVE: '1ffffffffff',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be92;b=53771babcbc44a298bb35a0e0207a58e;m=28a7d8a4a8;t=5de42da4ebfc8;x=2407b22342ad8c61',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_TRANSPORT: 'journal',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_COMM: 'balenad',
			CONTAINER_ID_FULL:
				'85e43c520374fb2b0f7b53d8e4cf059908856bad8ba8443c4e27176dc207b93d',
			_UID: '0',
			_SOURCE_REALTIME_TIMESTAMP: '1651753595355059',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_PID: '899',
			SYSLOG_IDENTIFIER: '85e43c520374',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_ID: '85e43c520374',
			__REALTIME_TIMESTAMP: '1651753595355080',
		},
	},
	{
		level: 'info',
		message: {
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be99;b=53771babcbc44a298bb35a0e0207a58e;m=28a7dad23f;t=5de42da50ed60;x=a913fe1ed0e4e2ec',
			MESSAGE:
				"<125>May 05 12:26:25 sporer5246 consectetur[7490]: I'Ll generate the auxiliary IB circuit, that should matrix the CSS program!\r",
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_COMM: 'balenad',
			_EXE: '/usr/bin/balena-engine',
			_HOSTNAME: '0daeb01',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SOURCE_REALTIME_TIMESTAMP: '1651753595497672',
			CONTAINER_TAG: 'e98be0cc5b7f',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			PRIORITY: '6',
			_UID: '0',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			__REALTIME_TIMESTAMP: '1651753595497824',
			_SYSTEMD_UNIT: 'balena.service',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_ID: 'e98be0cc5b7f',
			_GID: '0',
			_TRANSPORT: 'journal',
			__MONOTONIC_TIMESTAMP: '174614827583',
			_PID: '899',
			CONTAINER_NAME:
				'rfc3164_4863687_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_ID_FULL:
				'e98be0cc5b7fb7d37ed6f350c1e293ddf4fc2a1400115f99dde3bcf106bdd843',
			SYSLOG_IDENTIFIER: 'e98be0cc5b7f',
		},
	},
	{
		level: 'info',
		message: {
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			CONTAINER_ID_FULL:
				'8eb1bcb687275a0157cd32c2acf387b94d969c2d642b4cef6d7faf4fc3b79fdb',
			SYSLOG_IDENTIFIER: '8eb1bcb68727',
			_EXE: '/usr/bin/balena-engine',
			_TRANSPORT: 'journal',
			_SOURCE_REALTIME_TIMESTAMP: '1651753595530366',
			_COMM: 'balenad',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be9a;b=53771babcbc44a298bb35a0e0207a58e;m=28a7db519b;t=5de42da516cbc;x=891d38e2bf34b171',
			_PID: '899',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			MESSAGE:
				'{"host":"241.238.172.112", "user-identifier":"heidenreich5257", "datetime":"05/May/2022:12:26:25 +0000", "method": "PATCH", "request": "/integrate/scale", "protocol":"HTTP/1.0", "status":502, "bytes":29737, "referer": "http://www.investorinteractive.io/grow/enhance/transform"}\r',
			_SYSTEMD_SLICE: 'system.slice',
			CONTAINER_NAME: 'json_4863689_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_TAG: '8eb1bcb68727',
			_GID: '0',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SYSTEMD_UNIT: 'balena.service',
			PRIORITY: '6',
			_UID: '0',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_HOSTNAME: '0daeb01',
			CONTAINER_ID: '8eb1bcb68727',
			_CAP_EFFECTIVE: '1ffffffffff',
			__MONOTONIC_TIMESTAMP: '174614860187',
			__REALTIME_TIMESTAMP: '1651753595530428',
		},
	},
	{
		level: 'error',
		message: {
			PRIORITY: '6',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SOURCE_REALTIME_TIMESTAMP: '1651753596754372',
			CONTAINER_ID: '9e55b65728d7',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			_HOSTNAME: '0daeb01',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_UID: '0',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_TAG: '9e55b65728d7',
			_SYSTEMD_UNIT: 'balena.service',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8be9f;b=53771babcbc44a298bb35a0e0207a58e;m=28a7edfeb4;t=5de42da6419d4;x=269cccd83b005715',
			_GID: '0',
			MESSAGE:
				'2022-04-26 01:41:52.348 UTC [26295] ERROR:  relation "cards" does not exist at character 267\r',
			__MONOTONIC_TIMESTAMP: '174616084148',
			_PID: '899',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_EXE: '/usr/bin/balena-engine',
			_COMM: 'balenad',
			_TRANSPORT: 'journal',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			__REALTIME_TIMESTAMP: '1651753596754388',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
		},
	},
	{
		level: 'info',
		message: {
			PRIORITY: '6',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_PID: '899',
			_GID: '0',
			CONTAINER_ID_FULL:
				'f6ad5151b99197406f3a9979851684d1ed88bd247ec39b36b3b2da7791b5a32d',
			_UID: '0',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bea2;b=53771babcbc44a298bb35a0e0207a58e;m=28a7f8fe2b;t=5de42da6f194c;x=c4102ed97bda67f4',
			CONTAINER_ID: 'f6ad5151b991',
			_SOURCE_REALTIME_TIMESTAMP: '1651753597474493',
			SYSLOG_IDENTIFIER: 'f6ad5151b991',
			_SYSTEMD_UNIT: 'balena.service',
			_HOSTNAME: '0daeb01',
			_CAP_EFFECTIVE: '1ffffffffff',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Attempting container log timestamp flush...',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_COMM: 'balenad',
			CONTAINER_NAME: 'balena_supervisor',
			IMAGE_NAME:
				'registry2.balena-cloud.com/v2/f75c27bb2e0691569cc8b2cd16902f80:latest',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			CONTAINER_TAG: 'f6ad5151b991',
			__REALTIME_TIMESTAMP: '1651753597475148',
			__MONOTONIC_TIMESTAMP: '174616804907',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_TRANSPORT: 'journal',
		},
	},
	{
		level: 'info',
		message: {
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bea3;b=53771babcbc44a298bb35a0e0207a58e;m=28a7f8feb0;t=5de42da6f19d1;x=acb0892cb8d9a4d0',
			_CMDLINE: 'balena start --attach balena_supervisor',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_CGROUP: '/system.slice/balena-supervisor.service',
			_SYSTEMD_INVOCATION_ID: 'c755fe24af35412c8865d1ca4565cfae',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_STREAM_ID: '5ee1cc73e8704e9b9b1747e9a1743390',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Attempting container log timestamp flush...',
			_COMM: 'balena',
			SYSLOG_FACILITY: '3',
			_GID: '0',
			__REALTIME_TIMESTAMP: '1651753597475281',
			_PID: '1505',
			_HOSTNAME: '0daeb01',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_TRANSPORT: 'stdout',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_UNIT: 'balena-supervisor.service',
			_CAP_EFFECTIVE: '1ffffffffff',
			PRIORITY: '6',
			_UID: '0',
			__MONOTONIC_TIMESTAMP: '174616805040',
			SYSLOG_IDENTIFIER: 'balena-supervisor',
		},
	},
	{
		level: 'info',
		message: {
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_SYSTEMD_UNIT: 'balena.service',
			_COMM: 'balenad',
			_CAP_EFFECTIVE: '1ffffffffff',
			_UID: '0',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Container log timestamp flush complete',
			CONTAINER_NAME: 'balena_supervisor',
			_SYSTEMD_SLICE: 'system.slice',
			IMAGE_NAME:
				'registry2.balena-cloud.com/v2/f75c27bb2e0691569cc8b2cd16902f80:latest',
			_HOSTNAME: '0daeb01',
			__REALTIME_TIMESTAMP: '1651753597563661',
			__MONOTONIC_TIMESTAMP: '174616893421',
			PRIORITY: '6',
			CONTAINER_TAG: 'f6ad5151b991',
			_PID: '899',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			CONTAINER_ID_FULL:
				'f6ad5151b99197406f3a9979851684d1ed88bd247ec39b36b3b2da7791b5a32d',
			CONTAINER_ID: 'f6ad5151b991',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_GID: '0',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bea8;b=53771babcbc44a298bb35a0e0207a58e;m=28a7fa57ed;t=5de42da70730d;x=d2b87f67db7dfd75',
			SYSLOG_IDENTIFIER: 'f6ad5151b991',
			_EXE: '/usr/bin/balena-engine',
			_SOURCE_REALTIME_TIMESTAMP: '1651753597563616',
			_TRANSPORT: 'journal',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
		},
	},
	{
		level: 'info',
		message: {
			_GID: '0',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_UNIT: 'balena-supervisor.service',
			_STREAM_ID: '5ee1cc73e8704e9b9b1747e9a1743390',
			__REALTIME_TIMESTAMP: '1651753597563931',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			SYSLOG_FACILITY: '3',
			SYSLOG_IDENTIFIER: 'balena-supervisor',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_EXE: '/usr/bin/balena-engine',
			__MONOTONIC_TIMESTAMP: '174616893690',
			_UID: '0',
			_SYSTEMD_CGROUP: '/system.slice/balena-supervisor.service',
			PRIORITY: '6',
			_SYSTEMD_INVOCATION_ID: 'c755fe24af35412c8865d1ca4565cfae',
			_CAP_EFFECTIVE: '1ffffffffff',
			_PID: '1505',
			_CMDLINE: 'balena start --attach balena_supervisor',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Container log timestamp flush complete',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bea9;b=53771babcbc44a298bb35a0e0207a58e;m=28a7fa58fa;t=5de42da70741b;x=a580dbb9bef414a4',
			_TRANSPORT: 'stdout',
			_COMM: 'balena',
		},
	},
	{
		level: 'error',
		message: {
			_GID: '0',
			CONTAINER_ID: '9e55b65728d7',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_UID: '0',
			__REALTIME_TIMESTAMP: '1651753601759139',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			_COMM: 'balenad',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			MESSAGE:
				'2022-04-26 01:41:52.348 UTC [26295] ERROR:  relation "cards" does not exist at character 267\r',
			_SYSTEMD_UNIT: 'balena.service',
			PRIORITY: '6',
			_TRANSPORT: 'journal',
			_SOURCE_REALTIME_TIMESTAMP: '1651753601759115',
			_PID: '899',
			_EXE: '/usr/bin/balena-engine',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_TAG: '9e55b65728d7',
			_HOSTNAME: '0daeb01',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8beae;b=53771babcbc44a298bb35a0e0207a58e;m=28a83a5c83;t=5de42dab077a3;x=6e0a749b16d2e754',
			__MONOTONIC_TIMESTAMP: '174621088899',
			_SYSTEMD_SLICE: 'system.slice',
		},
	},
	{
		level: 'log',
		message: {
			_COMM: 'balenad',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_NAME:
				'apache_error_4863684_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_ID_FULL:
				'a95a424ff34f4b296697bfd0e210ccc49dc1fdef64c3b2e4113901338cd2d742',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			SYSLOG_IDENTIFIER: 'a95a424ff34f',
			MESSAGE:
				'[Thu May 05 12:26:33 2022] [sit:notice] [pid 6150:tid 5540] [client 250.92.36.164:34091] We need to parse the haptic IB hard drive!\r',
			CONTAINER_ID: 'a95a424ff34f',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_GID: '0',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_UID: '0',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8beb1;b=53771babcbc44a298bb35a0e0207a58e;m=28a8596317;t=5de42dacf7e38;x=5683443bd880b574',
			_PID: '899',
			__REALTIME_TIMESTAMP: '1651753603792440',
			_CAP_EFFECTIVE: '1ffffffffff',
			_TRANSPORT: 'journal',
			__MONOTONIC_TIMESTAMP: '174623122199',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_TAG: 'a95a424ff34f',
			_SOURCE_REALTIME_TIMESTAMP: '1651753603792302',
			PRIORITY: '6',
		},
	},
	{
		level: 'info',
		message: {
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			PRIORITY: '6',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_ID_FULL:
				'687b503f817d5329ffad0c39443ed30debbec7b8d7c7afd38e2d42d0d25f0f20',
			_SYSTEMD_SLICE: 'system.slice',
			_PID: '899',
			_GID: '0',
			SYSLOG_IDENTIFIER: '687b503f817d',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_TRANSPORT: 'journal',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8beb4;b=53771babcbc44a298bb35a0e0207a58e;m=28a86dc12f;t=5de42dae3dc4f;x=4624cfaa72f48e5',
			__REALTIME_TIMESTAMP: '1651753605127247',
			_UID: '0',
			__MONOTONIC_TIMESTAMP: '174624457007',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SOURCE_REALTIME_TIMESTAMP: '1651753605127155',
			CONTAINER_TAG: '687b503f817d',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			CONTAINER_NAME:
				'apache_combined_4863686_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			CONTAINER_ID: '687b503f817d',
			MESSAGE:
				'180.135.125.62 - beier8155 [05/May/2022:12:26:35 +0000] "PUT /e-commerce/sticky HTTP/1.0" 400 61999 "http://www.forwardenhance.biz/transform/generate" "Mozilla/5.0 (iPhone; CPU iPhone OS 7_2_2 like Mac OS X; en-US) AppleWebKit/531.34.5 (KHTML, like Gecko) Version/3.0.5 Mobile/8B113 Safari/6531.34.5"\r',
			_COMM: 'balenad',
			_HOSTNAME: '0daeb01',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
		},
	},
	{
		level: 'info',
		message: {
			__REALTIME_TIMESTAMP: '1651753605165785',
			_PID: '899',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			CONTAINER_ID: '4d7eb127f184',
			_UID: '0',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_COMM: 'balenad',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8beb5;b=53771babcbc44a298bb35a0e0207a58e;m=28a86e57b9;t=5de42dae472d9;x=b71afa69f3ea5088',
			_SOURCE_REALTIME_TIMESTAMP: '1651753605165761',
			_SYSTEMD_UNIT: 'balena.service',
			SYSLOG_IDENTIFIER: '4d7eb127f184',
			_HOSTNAME: '0daeb01',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_TAG: '4d7eb127f184',
			MESSAGE:
				'58.9.196.222 - - [05/May/2022:12:26:35 +0000] "DELETE /scalable/enhance HTTP/1.0" 405 4116\r',
			__MONOTONIC_TIMESTAMP: '174624495545',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_TRANSPORT: 'journal',
			CONTAINER_NAME:
				'apache_common_4863685_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_ID_FULL:
				'4d7eb127f1849accf836654baff75107f53da0a28eb1fdd1b08bd2fdf4c10ecf',
			_GID: '0',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
		},
	},
	{
		level: 'info',
		message: {
			_COMM: 'balenad',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_NAME:
				'rfc5424_4863688_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_CAP_EFFECTIVE: '1ffffffffff',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_PID: '899',
			_GID: '0',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			__MONOTONIC_TIMESTAMP: '174624685086',
			__REALTIME_TIMESTAMP: '1651753605355327',
			SYSLOG_IDENTIFIER: '85e43c520374',
			_EXE: '/usr/bin/balena-engine',
			MESSAGE:
				"<20>3 2022-05-05T12:26:35.260Z directharness.biz qui 9831 ID555 - Overriding the sensor won't do anything, we need to synthesize the cross-platform PCI bus!\r",
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_UNIT: 'balena.service',
			PRIORITY: '6',
			CONTAINER_TAG: '85e43c520374',
			_SYSTEMD_SLICE: 'system.slice',
			CONTAINER_ID_FULL:
				'85e43c520374fb2b0f7b53d8e4cf059908856bad8ba8443c4e27176dc207b93d',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8beb6;b=53771babcbc44a298bb35a0e0207a58e;m=28a8713c1e;t=5de42dae7573f;x=d3ced8305312e341',
			_SOURCE_REALTIME_TIMESTAMP: '1651753605355270',
			_TRANSPORT: 'journal',
			_UID: '0',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			CONTAINER_ID: '85e43c520374',
		},
	},
	{
		level: 'info',
		message: {
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			MESSAGE:
				'<35>May 05 12:26:35 kuphal2001 sequi[7560]: If we back up the circuit, we can get to the AGP panel through the haptic SQL pixel!\r',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_COMM: 'balenad',
			CONTAINER_TAG: 'e98be0cc5b7f',
			_GID: '0',
			CONTAINER_ID: 'e98be0cc5b7f',
			_UID: '0',
			_TRANSPORT: 'journal',
			_SYSTEMD_SLICE: 'system.slice',
			_PID: '899',
			_SYSTEMD_UNIT: 'balena.service',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			CONTAINER_NAME:
				'rfc3164_4863687_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8beb7;b=53771babcbc44a298bb35a0e0207a58e;m=28a8736e74;t=5de42dae98995;x=7de5490e594cd60b',
			__REALTIME_TIMESTAMP: '1651753605499285',
			__MONOTONIC_TIMESTAMP: '174624829044',
			PRIORITY: '6',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			SYSLOG_IDENTIFIER: 'e98be0cc5b7f',
			_CAP_EFFECTIVE: '1ffffffffff',
			_EXE: '/usr/bin/balena-engine',
			_SOURCE_REALTIME_TIMESTAMP: '1651753605499215',
			_HOSTNAME: '0daeb01',
			CONTAINER_ID_FULL:
				'e98be0cc5b7fb7d37ed6f350c1e293ddf4fc2a1400115f99dde3bcf106bdd843',
		},
	},
	{
		level: 'debug',
		message: {
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			_UID: '0',
			__REALTIME_TIMESTAMP: '1651753606764563',
			_COMM: 'balenad',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_PID: '899',
			_TRANSPORT: 'journal',
			_GID: '0',
			MESSAGE:
				'[Wed May 04 19:49:22 2022] [eveniet:debug] [pid 8854:tid 6233] [client 254.130.101.151:22531] Try to program the SMTP circuit, maybe it will bypass the wireless matrix!\r',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_ID: '9e55b65728d7',
			_SOURCE_REALTIME_TIMESTAMP: '1651753606764497',
			__MONOTONIC_TIMESTAMP: '174626094323',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bec3;b=53771babcbc44a298bb35a0e0207a58e;m=28a886bcf3;t=5de42dafcd813;x=5f2c859270dee3a8',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_TAG: '9e55b65728d7',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			_CAP_EFFECTIVE: '1ffffffffff',
		},
	},
	{
		level: 'critical',
		message: {
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			_UID: '0',
			_TRANSPORT: 'journal',
			_EXE: '/usr/bin/balena-engine',
			_COMM: 'balenad',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			_HOSTNAME: '0daeb01',
			_PID: '899',
			_GID: '0',
			MESSAGE:
				'2022-05-04T13:59:06.147Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-27v2v-49.3.16]: Unhandled Server Error {"message":"Schema query timeout: {"type":"object","additionalProperties":true}"}\r',
			CONTAINER_TAG: '9e55b65728d7',
			_SOURCE_REALTIME_TIMESTAMP: '1651753611770186',
			__MONOTONIC_TIMESTAMP: '174631100071',
			CONTAINER_ID: '9e55b65728d7',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bec6;b=53771babcbc44a298bb35a0e0207a58e;m=28a8d31ea7;t=5de42db4939c8;x=f78deac50398b4c4',
			__REALTIME_TIMESTAMP: '1651753611770312',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
		},
	},
	{
		level: 'critical',
		message: {
			__MONOTONIC_TIMESTAMP: '174633122892',
			MESSAGE:
				"[Thu May 05 12:26:43 2022] [enim:crit] [pid 5233:tid 3095] [client 129.146.56.155:28947] You can't index the hard drive without quantifying the bluetooth PNG program!\r",
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_SOURCE_REALTIME_TIMESTAMP: '1651753613793059',
			CONTAINER_NAME:
				'apache_error_4863684_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_SYSTEMD_UNIT: 'balena.service',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			CONTAINER_TAG: 'a95a424ff34f',
			_GID: '0',
			_HOSTNAME: '0daeb01',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bec9;b=53771babcbc44a298bb35a0e0207a58e;m=28a8f1fc4c;t=5de42db68176c;x=9490eb98d3d7b6e0',
			CONTAINER_ID_FULL:
				'a95a424ff34f4b296697bfd0e210ccc49dc1fdef64c3b2e4113901338cd2d742',
			__REALTIME_TIMESTAMP: '1651753613793132',
			SYSLOG_IDENTIFIER: 'a95a424ff34f',
			PRIORITY: '6',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_SYSTEMD_SLICE: 'system.slice',
			_UID: '0',
			_PID: '899',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_COMM: 'balenad',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_EXE: '/usr/bin/balena-engine',
			_TRANSPORT: 'journal',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_ID: 'a95a424ff34f',
		},
	},
	{
		level: 'info',
		message: {
			CONTAINER_NAME:
				'apache_combined_4863686_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_PID: '899',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_ID: '687b503f817d',
			_SOURCE_REALTIME_TIMESTAMP: '1651753615127616',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'108.194.179.172 - - [05/May/2022:12:26:45 +0000] "HEAD /seamless/morph/compelling/syndicate HTTP/2.0" 400 71567 "http://www.centrale-business.com/extend" "Opera/9.93 (X11; Linux i686; en-US) Presto/2.10.199 Version/11.00"\r',
			PRIORITY: '6',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8becc;b=53771babcbc44a298bb35a0e0207a58e;m=28a9065965;t=5de42db7c7485;x=a6688a5ecd75a173',
			CONTAINER_TAG: '687b503f817d',
			_GID: '0',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_COMM: 'balenad',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			__MONOTONIC_TIMESTAMP: '174634457445',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_EXE: '/usr/bin/balena-engine',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			__REALTIME_TIMESTAMP: '1651753615127685',
			CONTAINER_ID_FULL:
				'687b503f817d5329ffad0c39443ed30debbec7b8d7c7afd38e2d42d0d25f0f20',
			SYSLOG_IDENTIFIER: '687b503f817d',
			_TRANSPORT: 'journal',
			_UID: '0',
		},
	},
	{
		level: 'info',
		message: {
			CONTAINER_ID: '4d7eb127f184',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_UNIT: 'balena.service',
			_PID: '899',
			_CAP_EFFECTIVE: '1ffffffffff',
			__MONOTONIC_TIMESTAMP: '174634496138',
			_UID: '0',
			CONTAINER_ID_FULL:
				'4d7eb127f1849accf836654baff75107f53da0a28eb1fdd1b08bd2fdf4c10ecf',
			_TRANSPORT: 'journal',
			PRIORITY: '6',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8becd;b=53771babcbc44a298bb35a0e0207a58e;m=28a906f08a;t=5de42db7d0baa;x=b954fbbb8dec8bf6',
			_COMM: 'balenad',
			CONTAINER_TAG: '4d7eb127f184',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			__REALTIME_TIMESTAMP: '1651753615166378',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_SLICE: 'system.slice',
			SYSLOG_IDENTIFIER: '4d7eb127f184',
			CONTAINER_NAME:
				'apache_common_4863685_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			MESSAGE:
				'66.190.46.166 - stehr6011 [05/May/2022:12:26:45 +0000] "DELETE /transition/enhance HTTP/1.1" 501 8291\r',
			_GID: '0',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_SOURCE_REALTIME_TIMESTAMP: '1651753615166309',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
		},
	},
	{
		level: 'info',
		message: {
			_SYSTEMD_UNIT: 'balena.service',
			_PID: '899',
			__REALTIME_TIMESTAMP: '1651753615356368',
			CONTAINER_TAG: '85e43c520374',
			_UID: '0',
			CONTAINER_ID: '85e43c520374',
			SYSLOG_IDENTIFIER: '85e43c520374',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bece;b=53771babcbc44a298bb35a0e0207a58e;m=28a909d6b0;t=5de42db7ff1d0;x=b3e4ee9fcf429f32',
			MESSAGE:
				'<52>3 2022-05-05T12:26:45.260Z internationaldisintermediate.com magnam 3306 ID581 - Use the back-end ADP firewall, then you can input the bluetooth transmitter!\r',
			_EXE: '/usr/bin/balena-engine',
			__MONOTONIC_TIMESTAMP: '174634686128',
			CONTAINER_ID_FULL:
				'85e43c520374fb2b0f7b53d8e4cf059908856bad8ba8443c4e27176dc207b93d',
			_COMM: 'balenad',
			_CAP_EFFECTIVE: '1ffffffffff',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			_TRANSPORT: 'journal',
			_SYSTEMD_SLICE: 'system.slice',
			_HOSTNAME: '0daeb01',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_GID: '0',
			CONTAINER_NAME:
				'rfc5424_4863688_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_SOURCE_REALTIME_TIMESTAMP: '1651753615356265',
		},
	},
	{
		level: 'info',
		message: {
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_PID: '899',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SOURCE_REALTIME_TIMESTAMP: '1651753615499667',
			CONTAINER_TAG: 'e98be0cc5b7f',
			_TRANSPORT: 'journal',
			_COMM: 'balenad',
			_SYSTEMD_SLICE: 'system.slice',
			CONTAINER_ID: 'e98be0cc5b7f',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			__REALTIME_TIMESTAMP: '1651753615499755',
			MESSAGE:
				"<121>May 05 12:26:45 douglas3816 voluptatem[6599]: I'Ll hack the digital JBOD firewall, that should feed the HDD matrix!\r",
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_UID: '0',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__MONOTONIC_TIMESTAMP: '174634829514',
			_SYSTEMD_UNIT: 'balena.service',
			PRIORITY: '6',
			CONTAINER_ID_FULL:
				'e98be0cc5b7fb7d37ed6f350c1e293ddf4fc2a1400115f99dde3bcf106bdd843',
			SYSLOG_IDENTIFIER: 'e98be0cc5b7f',
			_GID: '0',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8becf;b=53771babcbc44a298bb35a0e0207a58e;m=28a90c06ca;t=5de42db8221eb;x=7013b46abe95666',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_NAME:
				'rfc3164_4863687_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
		},
	},
	{
		level: 'info',
		message: {
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			__REALTIME_TIMESTAMP: '1651753616775814',
			_COMM: 'balenad',
			_SOURCE_REALTIME_TIMESTAMP: '1651753616775618',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_TRANSPORT: 'journal',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_SYSTEMD_SLICE: 'system.slice',
			_PID: '899',
			CONTAINER_TAG: '9e55b65728d7',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			_EXE: '/usr/bin/balena-engine',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bedb;b=53771babcbc44a298bb35a0e0207a58e;m=28a91f7f65;t=5de42db959a86;x=3f0895624ff0b206',
			_UID: '0',
			MESSAGE:
				'2022-05-02 15:59:24.516 UTC [42135] DETAIL:  Key (slug, version_major, version_minor, version_patch, version_prerelease, version_build)=(5aa9c978-6ad1-44d7-a6d9-1d82e87086f7, 1, 0, 0, , ) already exists.\r',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			__MONOTONIC_TIMESTAMP: '174636105573',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_ID: '9e55b65728d7',
			_GID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			_HOSTNAME: '0daeb01',
			PRIORITY: '6',
		},
	},
	{
		level: 'critical',
		message: {
			CONTAINER_ID: '9e55b65728d7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_GID: '0',
			_HOSTNAME: '0daeb01',
			_TRANSPORT: 'journal',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_TAG: '9e55b65728d7',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bede;b=53771babcbc44a298bb35a0e0207a58e;m=28a96bdd5b;t=5de42dbe1f87b;x=376ffb2d119a03d2',
			_SOURCE_REALTIME_TIMESTAMP: '1651753621780547',
			_COMM: 'balenad',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			_EXE: '/usr/bin/balena-engine',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			__MONOTONIC_TIMESTAMP: '174641110363',
			_UID: '0',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			__REALTIME_TIMESTAMP: '1651753621780603',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_PID: '899',
			MESSAGE:
				'2022-05-04T13:59:06.147Z [build/index] [crit] [SERVER-ERROR-jellyfish-64b7d5ddf4-27v2v-49.3.16]: Unhandled Server Error {"message":"Schema query timeout: {"type":"object","additionalProperties":true}"}\r',
		},
	},
	{
		level: 'log',
		message: {
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'[Thu May 05 12:26:53 2022] [sit:notice] [pid 8617:tid 6855] [client 245.133.71.248:60559] Use the 1080p HTTP matrix, then you can parse the haptic alarm!\r',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bee1;b=53771babcbc44a298bb35a0e0207a58e;m=28a98a950c;t=5de42dc00b02d;x=c517decf4c91a6e0',
			CONTAINER_TAG: 'a95a424ff34f',
			__MONOTONIC_TIMESTAMP: '174643123468',
			_CAP_EFFECTIVE: '1ffffffffff',
			CONTAINER_NAME:
				'apache_error_4863684_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_GID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			PRIORITY: '6',
			__REALTIME_TIMESTAMP: '1651753623793709',
			_PID: '899',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_TRANSPORT: 'journal',
			_EXE: '/usr/bin/balena-engine',
			SYSLOG_IDENTIFIER: 'a95a424ff34f',
			_UID: '0',
			_SOURCE_REALTIME_TIMESTAMP: '1651753623793617',
			CONTAINER_ID_FULL:
				'a95a424ff34f4b296697bfd0e210ccc49dc1fdef64c3b2e4113901338cd2d742',
			_HOSTNAME: '0daeb01',
			CONTAINER_ID: 'a95a424ff34f',
			_COMM: 'balenad',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
		},
	},
	{
		level: 'info',
		message: {
			__MONOTONIC_TIMESTAMP: '174644458183',
			CONTAINER_TAG: '687b503f817d',
			SYSLOG_IDENTIFIER: '687b503f817d',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_UID: '0',
			_COMM: 'balenad',
			_GID: '0',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SOURCE_REALTIME_TIMESTAMP: '1651753625128300',
			_PID: '899',
			_TRANSPORT: 'journal',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bee4;b=53771babcbc44a298bb35a0e0207a58e;m=28a99ef2c7;t=5de42dc150de7;x=58f39c199acd5a1',
			CONTAINER_NAME:
				'apache_combined_4863686_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_EXE: '/usr/bin/balena-engine',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			MESSAGE:
				'187.126.151.71 - - [05/May/2022:12:26:55 +0000] "HEAD /visualize/seize/utilize/applications HTTP/1.0" 404 15398 "https://www.dynamicreintermediate.biz/cross-media/leverage" "Mozilla/5.0 (Windows NT 5.2) AppleWebKit/5360 (KHTML, like Gecko) Chrome/39.0.864.0 Mobile Safari/5360"\r',
			_HOSTNAME: '0daeb01',
			CONTAINER_ID_FULL:
				'687b503f817d5329ffad0c39443ed30debbec7b8d7c7afd38e2d42d0d25f0f20',
			__REALTIME_TIMESTAMP: '1651753625128423',
			CONTAINER_ID: '687b503f817d',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
		},
	},
	{
		level: 'info',
		message: {
			MESSAGE:
				'211.218.21.51 - kunze8511 [05/May/2022:12:26:55 +0000] "DELETE /reinvent/distributed HTTP/1.1" 304 11571\r',
			_UID: '0',
			_COMM: 'balenad',
			_SYSTEMD_SLICE: 'system.slice',
			__MONOTONIC_TIMESTAMP: '174644496661',
			_GID: '0',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_NAME:
				'apache_common_4863685_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			CONTAINER_TAG: '4d7eb127f184',
			SYSLOG_IDENTIFIER: '4d7eb127f184',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__REALTIME_TIMESTAMP: '1651753625166902',
			_PID: '899',
			PRIORITY: '6',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			CONTAINER_ID_FULL:
				'4d7eb127f1849accf836654baff75107f53da0a28eb1fdd1b08bd2fdf4c10ecf',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_UNIT: 'balena.service',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bee5;b=53771babcbc44a298bb35a0e0207a58e;m=28a99f8915;t=5de42dc15a436;x=36f81ccbc293fe28',
			_SOURCE_REALTIME_TIMESTAMP: '1651753625166790',
			_HOSTNAME: '0daeb01',
			CONTAINER_ID: '4d7eb127f184',
			_TRANSPORT: 'journal',
			_CAP_EFFECTIVE: '1ffffffffff',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
		},
	},
	{
		level: 'info',
		message: {
			_PID: '899',
			CONTAINER_NAME:
				'rfc5424_4863688_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_EXE: '/usr/bin/balena-engine',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_GID: '0',
			PRIORITY: '6',
			SYSLOG_IDENTIFIER: '85e43c520374',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_COMM: 'balenad',
			MESSAGE:
				'<161>1 2022-05-05T12:26:55.260Z customersticky.info fugit 1432 ID913 - If we index the microchip, we can get to the PCI interface through the bluetooth SQL bandwidth!\r',
			_SOURCE_REALTIME_TIMESTAMP: '1651753625356343',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_ID: '85e43c520374',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bee6;b=53771babcbc44a298bb35a0e0207a58e;m=28a9a26d2e;t=5de42dc18884e;x=de9732a5c7da4083',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__REALTIME_TIMESTAMP: '1651753625356366',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_UID: '0',
			CONTAINER_TAG: '85e43c520374',
			_TRANSPORT: 'journal',
			CONTAINER_ID_FULL:
				'85e43c520374fb2b0f7b53d8e4cf059908856bad8ba8443c4e27176dc207b93d',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			__MONOTONIC_TIMESTAMP: '174644686126',
			_CAP_EFFECTIVE: '1ffffffffff',
		},
	},
	{
		level: 'info',
		message: {
			CONTAINER_TAG: 'e98be0cc5b7f',
			IMAGE_NAME:
				'sha256:532396cca7b9147701d8c24b3dcaa20c14eb84c55f4de7b0d0b800b59f8fc76e',
			_SYSTEMD_UNIT: 'balena.service',
			__REALTIME_TIMESTAMP: '1651753625500716',
			CONTAINER_ID: 'e98be0cc5b7f',
			_UID: '0',
			_GID: '0',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bee7;b=53771babcbc44a298bb35a0e0207a58e;m=28a9a4a10b;t=5de42dc1abc2c;x=306bd8ae1e8c85ea',
			SYSLOG_IDENTIFIER: 'e98be0cc5b7f',
			_PID: '899',
			MESSAGE:
				'<81>May 05 12:26:55 mitchell2043 et[5580]: The CSS application is down, back up the digital system so we can copy the COM panel!\r',
			CONTAINER_NAME:
				'rfc3164_4863687_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			PRIORITY: '6',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_HOSTNAME: '0daeb01',
			_TRANSPORT: 'journal',
			CONTAINER_ID_FULL:
				'e98be0cc5b7fb7d37ed6f350c1e293ddf4fc2a1400115f99dde3bcf106bdd843',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_COMM: 'balenad',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			__MONOTONIC_TIMESTAMP: '174644830475',
			_SYSTEMD_SLICE: 'system.slice',
			_SOURCE_REALTIME_TIMESTAMP: '1651753625500534',
			_EXE: '/usr/bin/balena-engine',
		},
	},
	{
		level: 'debug',
		message: {
			_SOURCE_REALTIME_TIMESTAMP: '1651753626784639',
			CONTAINER_ID: '9e55b65728d7',
			_SYSTEMD_SLICE: 'system.slice',
			_HOSTNAME: '0daeb01',
			_UID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_EXE: '/usr/bin/balena-engine',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			__MONOTONIC_TIMESTAMP: '174646114472',
			__REALTIME_TIMESTAMP: '1651753626784712',
			_CAP_EFFECTIVE: '1ffffffffff',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bef3;b=53771babcbc44a298bb35a0e0207a58e;m=28a9b838a8;t=5de42dc2e53c8;x=94f7aa6747dba113',
			_PID: '899',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_GID: '0',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			CONTAINER_TAG: '9e55b65728d7',
			_TRANSPORT: 'journal',
			MESSAGE:
				'[Wed May 04 19:49:22 2022] [eveniet:debug] [pid 8854:tid 6233] [client 254.130.101.151:22531] Try to program the SMTP circuit, maybe it will bypass the wireless matrix!\r',
			_COMM: 'balenad',
		},
	},
	{
		level: 'debug',
		message: {
			_TRANSPORT: 'journal',
			_EXE: '/usr/bin/balena-engine',
			_HOSTNAME: '0daeb01',
			IMAGE_NAME:
				'sha256:2d3f0023757a8e9eff8827578959e48b3ab0d0abcb078f98a142db6c61aba8f0',
			CONTAINER_ID: '9e55b65728d7',
			_SYSTEMD_UNIT: 'balena.service',
			CONTAINER_TAG: '9e55b65728d7',
			CONTAINER_NAME:
				'errorer_4863683_2156411_a2c36e063d1ef80d173d3413e9dc7da7',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_COMM: 'balenad',
			__MONOTONIC_TIMESTAMP: '174651118105',
			_GID: '0',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=8bef6;b=53771babcbc44a298bb35a0e0207a58e;m=28aa049219;t=5de42dc7aad39;x=b47e7577645c0fb7',
			MESSAGE:
				'[Wed May 04 19:49:22 2022] [eveniet:debug] [pid 8854:tid 6233] [client 254.130.101.151:22531] Try to program the SMTP circuit, maybe it will bypass the wireless matrix!\r',
			_CAP_EFFECTIVE: '1ffffffffff',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SOURCE_REALTIME_TIMESTAMP: '1651753631788328',
			_SYSTEMD_SLICE: 'system.slice',
			_PID: '899',
			SYSLOG_IDENTIFIER: '9e55b65728d7',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__REALTIME_TIMESTAMP: '1651753631788345',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_UID: '0',
			PRIORITY: '6',
			CONTAINER_ID_FULL:
				'9e55b65728d77c575be894165ed90c6396bcc927c06fdb18414f62097e2443c0',
		},
	},
	{
		level: 'info',
		message: {
			_TRANSPORT: 'stdout',
			_SYSTEMD_UNIT: 'balena.service',
			_UID: '0',
			_HOSTNAME: '0daeb01',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			__MONOTONIC_TIMESTAMP: '184112964763',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca800;b=53771babcbc44a298bb35a0e0207a58e;m=2addfce49b;t=5de451072ffb4;x=41180f2524802635',
			_GID: '0',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_SLICE: 'system.slice',
			_EXE: '/usr/bin/balena-engine',
			_PID: '1034',
			SYSLOG_FACILITY: '3',
			SYSLOG_IDENTIFIER: 'balenad',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			MESSAGE:
				'time="2022-05-05T15:04:53.634627129Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/b6526e32d497d093f3c9ad0940a95a05b24e935b5e212e8c0b2e4e809c0a5075.sock debug=false pid=734684',
			_COMM: 'balena-engine-c',
			__REALTIME_TIMESTAMP: '1651763093634996',
			PRIORITY: '6',
		},
	},
	{
		level: 'info',
		message: {
			SYSLOG_FACILITY: '3',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca832;b=53771babcbc44a298bb35a0e0207a58e;m=2ade0ab25a;t=5de451080cd7a;x=fdbc663bc193802a',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_SYSTEMD_UNIT: 'balena.service',
			_PID: '1034',
			_CAP_EFFECTIVE: '1ffffffffff',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			__REALTIME_TIMESTAMP: '1651763094539642',
			_TRANSPORT: 'stdout',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_HOSTNAME: '0daeb01',
			_GID: '0',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_SYSTEMD_SLICE: 'system.slice',
			__MONOTONIC_TIMESTAMP: '184113869402',
			_COMM: 'balena-engine-c',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			_EXE: '/usr/bin/balena-engine',
			SYSLOG_IDENTIFIER: 'balenad',
			PRIORITY: '6',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			MESSAGE:
				'time="2022-05-05T15:04:54.539565066Z" level=info msg="shim reaped" id=7ad798681ca71e5578cd71a266438edbd789c7de9e82bb402c028b7d38ccaef3',
			_UID: '0',
		},
	},
	{
		level: 'info',
		message: {
			_PID: '899',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca833;b=53771babcbc44a298bb35a0e0207a58e;m=2ade0ad60b;t=5de451080f12b;x=5444b8ac3ec7856b',
			__MONOTONIC_TIMESTAMP: '184113878539',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			SYSLOG_FACILITY: '3',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_UID: '0',
			MESSAGE:
				'time="2022-05-05T15:04:54.548674571Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"',
			_GID: '0',
			PRIORITY: '6',
			_CAP_EFFECTIVE: '1ffffffffff',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_EXE: '/usr/bin/balena-engine',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_UNIT: 'balena.service',
			_TRANSPORT: 'stdout',
			_SYSTEMD_SLICE: 'system.slice',
			__REALTIME_TIMESTAMP: '1651763094548779',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_COMM: 'balenad',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			SYSLOG_IDENTIFIER: 'balenad',
		},
	},
	{
		level: 'info',
		message: {
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca896;b=53771babcbc44a298bb35a0e0207a58e;m=2ae2f7d98c;t=5de45156df4ad;x=87c7b4f489edccbd',
			IMAGE_NAME:
				'registry2.balena-cloud.com/v2/f75c27bb2e0691569cc8b2cd16902f80:latest',
			_SOURCE_REALTIME_TIMESTAMP: '1651763177190379',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_SLICE: 'system.slice',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_HOSTNAME: '0daeb01',
			MESSAGE:
				'[\u001b[47m\u001b[30mapi\u001b[39m\u001b[49m]     GET /v1/healthy 200 - 6.900 ms',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			PRIORITY: '6',
			CONTAINER_NAME: 'balena_supervisor',
			__REALTIME_TIMESTAMP: '1651763177190573',
			_UID: '0',
			_COMM: 'balenad',
			_GID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			SYSLOG_IDENTIFIER: 'f6ad5151b991',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__MONOTONIC_TIMESTAMP: '184196520332',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			CONTAINER_ID: 'f6ad5151b991',
			_TRANSPORT: 'journal',
			_PID: '899',
			CONTAINER_TAG: 'f6ad5151b991',
			CONTAINER_ID_FULL:
				'f6ad5151b99197406f3a9979851684d1ed88bd247ec39b36b3b2da7791b5a32d',
		},
	},
	{
		level: 'info',
		message: {
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_UNIT: 'balena-supervisor.service',
			__REALTIME_TIMESTAMP: '1651763177191802',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_CGROUP: '/system.slice/balena-supervisor.service',
			_TRANSPORT: 'stdout',
			MESSAGE:
				'[\u001b[47m\u001b[30mapi\u001b[39m\u001b[49m]     GET /v1/healthy 200 - 6.900 ms',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_UID: '0',
			SYSLOG_IDENTIFIER: 'balena-supervisor',
			_HOSTNAME: '0daeb01',
			PRIORITY: '6',
			_CAP_EFFECTIVE: '1ffffffffff',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca897;b=53771babcbc44a298bb35a0e0207a58e;m=2ae2f7de59;t=5de45156df97a;x=bc676648ca6da31b',
			_STREAM_ID: '5ee1cc73e8704e9b9b1747e9a1743390',
			__MONOTONIC_TIMESTAMP: '184196521561',
			_PID: '1505',
			SYSLOG_FACILITY: '3',
			_COMM: 'balena',
			_SYSTEMD_INVOCATION_ID: 'c755fe24af35412c8865d1ca4565cfae',
			_CMDLINE: 'balena start --attach balena_supervisor',
			_GID: '0',
		},
	},
	{
		level: 'info',
		message: {
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			__MONOTONIC_TIMESTAMP: '184216814335',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca8fa;b=53771babcbc44a298bb35a0e0207a58e;m=2ae42d82ff;t=5de4516a39e18;x=736abf7ee55d901b',
			IMAGE_NAME:
				'registry2.balena-cloud.com/v2/f75c27bb2e0691569cc8b2cd16902f80:latest',
			_UID: '0',
			_TRANSPORT: 'journal',
			__REALTIME_TIMESTAMP: '1651763197484568',
			_GID: '0',
			_EXE: '/usr/bin/balena-engine',
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Attempting container log timestamp flush...',
			PRIORITY: '6',
			SYSLOG_IDENTIFIER: 'f6ad5151b991',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_HOSTNAME: '0daeb01',
			_COMM: 'balenad',
			CONTAINER_ID_FULL:
				'f6ad5151b99197406f3a9979851684d1ed88bd247ec39b36b3b2da7791b5a32d',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_UNIT: 'balena.service',
			_SOURCE_REALTIME_TIMESTAMP: '1651763197484516',
			CONTAINER_TAG: 'f6ad5151b991',
			CONTAINER_ID: 'f6ad5151b991',
			CONTAINER_NAME: 'balena_supervisor',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_PID: '899',
		},
	},
	{
		level: 'info',
		message: {
			_STREAM_ID: '5ee1cc73e8704e9b9b1747e9a1743390',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Attempting container log timestamp flush...',
			_SYSTEMD_UNIT: 'balena-supervisor.service',
			_HOSTNAME: '0daeb01',
			__MONOTONIC_TIMESTAMP: '184216815575',
			_SYSTEMD_INVOCATION_ID: 'c755fe24af35412c8865d1ca4565cfae',
			_PID: '1505',
			SYSLOG_IDENTIFIER: 'balena-supervisor',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CMDLINE: 'balena start --attach balena_supervisor',
			_GID: '0',
			_UID: '0',
			_TRANSPORT: 'stdout',
			_SYSTEMD_CGROUP: '/system.slice/balena-supervisor.service',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			SYSLOG_FACILITY: '3',
			__REALTIME_TIMESTAMP: '1651763197485817',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca8fb;b=53771babcbc44a298bb35a0e0207a58e;m=2ae42d87d7;t=5de4516a3a2f9;x=acb0892cb8d9a4d0',
			_CAP_EFFECTIVE: '1ffffffffff',
			_COMM: 'balena',
			_EXE: '/usr/bin/balena-engine',
		},
	},
	{
		level: 'info',
		message: {
			_SYSTEMD_UNIT: 'balena.service',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			MESSAGE:
				'[\u001b[35mdebug\u001b[39m]   Container log timestamp flush complete',
			SYSLOG_IDENTIFIER: 'f6ad5151b991',
			__REALTIME_TIMESTAMP: '1651763197496739',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_GID: '0',
			CONTAINER_ID: 'f6ad5151b991',
			CONTAINER_NAME: 'balena_supervisor',
			CONTAINER_ID_FULL:
				'f6ad5151b99197406f3a9979851684d1ed88bd247ec39b36b3b2da7791b5a32d',
			_HOSTNAME: '0daeb01',
			_PID: '899',
			_EXE: '/usr/bin/balena-engine',
			IMAGE_NAME:
				'registry2.balena-cloud.com/v2/f75c27bb2e0691569cc8b2cd16902f80:latest',
			_CAP_EFFECTIVE: '1ffffffffff',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca8fc;b=53771babcbc44a298bb35a0e0207a58e;m=2ae42db282;t=5de4516a3cda3;x=97f34ce9b3c66395',
			__MONOTONIC_TIMESTAMP: '184216826498',
			_TRANSPORT: 'journal',
			_UID: '0',
			_SYSTEMD_SLICE: 'system.slice',
			PRIORITY: '6',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_COMM: 'balenad',
			_SOURCE_REALTIME_TIMESTAMP: '1651763197496588',
			CONTAINER_TAG: 'f6ad5151b991',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
		},
	},
	{
		level: 'info',
		message: {
			_TRANSPORT: 'stdout',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca9c2;b=53771babcbc44a298bb35a0e0207a58e;m=2ae8cf34df;t=5de451b455000;x=8f52050b0e982942',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_EXE: '/usr/bin/balena-engine',
			__MONOTONIC_TIMESTAMP: '184294520031',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_CAP_EFFECTIVE: '1ffffffffff',
			_COMM: 'balena-engine-c',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			SYSLOG_FACILITY: '3',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			MESSAGE:
				'time="2022-05-05T15:07:55.189978361Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/f8fa2d0cf66f1855a3e6bfca15c0ff6eb6106e8804da86ecbe7b81c2fe26d969.sock debug=false pid=735103',
			SYSLOG_IDENTIFIER: 'balenad',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_GID: '0',
			_PID: '1034',
			_UID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_SLICE: 'system.slice',
			PRIORITY: '6',
			__REALTIME_TIMESTAMP: '1651763275190272',
			_HOSTNAME: '0daeb01',
		},
	},
	{
		level: 'info',
		message: {
			_UID: '0',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_GID: '0',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			PRIORITY: '6',
			_TRANSPORT: 'stdout',
			_SYSTEMD_UNIT: 'balena.service',
			_CAP_EFFECTIVE: '1ffffffffff',
			__REALTIME_TIMESTAMP: '1651763276109716',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			MESSAGE:
				'time="2022-05-05T15:07:56.109505963Z" level=info msg="shim reaped" id=6ff08b77dbaf458bb8665858b49cfa2783ddcebae2fd2fa96bcedb7d80ce874c',
			_HOSTNAME: '0daeb01',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca9f4;b=53771babcbc44a298bb35a0e0207a58e;m=2ae8dd3c77;t=5de451b535794;x=25ec370f138f24d0',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			SYSLOG_IDENTIFIER: 'balenad',
			_PID: '1034',
			_COMM: 'balena-engine-c',
			_EXE: '/usr/bin/balena-engine',
			SYSLOG_FACILITY: '3',
			__MONOTONIC_TIMESTAMP: '184295439479',
		},
	},
	{
		level: 'info',
		message: {
			_UID: '0',
			__REALTIME_TIMESTAMP: '1651763276118492',
			_EXE: '/usr/bin/balena-engine',
			_CAP_EFFECTIVE: '1ffffffffff',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_SYSTEMD_UNIT: 'balena.service',
			_HOSTNAME: '0daeb01',
			SYSLOG_IDENTIFIER: 'balenad',
			__MONOTONIC_TIMESTAMP: '184295448252',
			_COMM: 'balenad',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=ca9f5;b=53771babcbc44a298bb35a0e0207a58e;m=2ae8dd5ebc;t=5de451b5379dc;x=8dff12b017d8898',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_TRANSPORT: 'stdout',
			PRIORITY: '6',
			MESSAGE:
				'time="2022-05-05T15:07:56.118440103Z" level=info msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"',
			_PID: '899',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_GID: '0',
			SYSLOG_FACILITY: '3',
		},
	},
	{
		level: 'info',
		message: {
			_COMM: 'balena-engine-c',
			_GID: '0',
			_UID: '0',
			_PID: '1034',
			__MONOTONIC_TIMESTAMP: '184476093056',
			_EXE: '/usr/bin/balena-engine',
			_CAP_EFFECTIVE: '1ffffffffff',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			SYSLOG_IDENTIFIER: 'balenad',
			__REALTIME_TIMESTAMP: '1651763456763287',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			SYSLOG_FACILITY: '3',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			PRIORITY: '6',
			MESSAGE:
				'time="2022-05-05T15:10:56.762999007Z" level=info msg="shim balena-engine-containerd-shim started" address=/containerd-shim/af06d83d923df7d4d8d99794aee9d7269402ace3e170f9e4a34e4c920728a732.sock debug=false pid=735442',
			_SYSTEMD_UNIT: 'balena.service',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=caa58;b=53771babcbc44a298bb35a0e0207a58e;m=2af3a1ca80;t=5de452617e597;x=7ce1e5a2598067d2',
			_TRANSPORT: 'stdout',
			_SYSTEMD_SLICE: 'system.slice',
		},
	},
	{
		level: 'info',
		message: {
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_PID: '1034',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_TRANSPORT: 'stdout',
			_SYSTEMD_SLICE: 'system.slice',
			SYSLOG_FACILITY: '3',
			_GID: '0',
			_SYSTEMD_UNIT: 'balena.service',
			__REALTIME_TIMESTAMP: '1651763457714437',
			SYSLOG_IDENTIFIER: 'balenad',
			MESSAGE:
				'time="2022-05-05T15:10:57.714334870Z" level=info msg="shim reaped" id=86205205bfe20798e3090ea9e124c89d0964b5af6654abeb5c95d4ee9cc499e5',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_COMM: 'balena-engine-c',
			_CAP_EFFECTIVE: '1ffffffffff',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=caa8a;b=53771babcbc44a298bb35a0e0207a58e;m=2af3b04de4;t=5de4526266905;x=74ba68161cf984f9',
			__MONOTONIC_TIMESTAMP: '184477044196',
			_EXE: '/usr/bin/balena-engine',
			_UID: '0',
			PRIORITY: '6',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
		},
	},
	{
		level: 'info',
		message: {
			__REALTIME_TIMESTAMP: '1651763477629496',
			CONTAINER_ID_FULL:
				'f6ad5151b99197406f3a9979851684d1ed88bd247ec39b36b3b2da7791b5a32d',
			CONTAINER_NAME: 'balena_supervisor',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=caaee;b=53771babcbc44a298bb35a0e0207a58e;m=2af4e02f17;t=5de4527564a38;x=e98e731f6df5f155',
			PRIORITY: '6',
			_TRANSPORT: 'journal',
			_UID: '0',
			_SYSTEMD_SLICE: 'system.slice',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			MESSAGE:
				'[\u001b[47m\u001b[30mapi\u001b[39m\u001b[49m]     GET /v1/healthy 200 - 4.877 ms',
			_SOURCE_REALTIME_TIMESTAMP: '1651763477629347',
			_HOSTNAME: '0daeb01',
			_COMM: 'balenad',
			CONTAINER_ID: 'f6ad5151b991',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			SYSLOG_IDENTIFIER: 'f6ad5151b991',
			__MONOTONIC_TIMESTAMP: '184496959255',
			_EXE: '/usr/bin/balena-engine',
			_CAP_EFFECTIVE: '1ffffffffff',
			_PID: '899',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			IMAGE_NAME:
				'registry2.balena-cloud.com/v2/f75c27bb2e0691569cc8b2cd16902f80:latest',
			CONTAINER_TAG: 'f6ad5151b991',
			_GID: '0',
			_SYSTEMD_UNIT: 'balena.service',
		},
	},
	{
		level: 'info',
		message: {
			_UID: '0',
			_EXE: '/usr/bin/balena-engine',
			SYSLOG_FACILITY: '3',
			_STREAM_ID: '5ee1cc73e8704e9b9b1747e9a1743390',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			SYSLOG_IDENTIFIER: 'balena-supervisor',
			__REALTIME_TIMESTAMP: '1651763477630390',
			_PID: '1505',
			_TRANSPORT: 'stdout',
			_HOSTNAME: '0daeb01',
			__MONOTONIC_TIMESTAMP: '184496960148',
			_SYSTEMD_INVOCATION_ID: 'c755fe24af35412c8865d1ca4565cfae',
			_CMDLINE: 'balena start --attach balena_supervisor',
			PRIORITY: '6',
			_GID: '0',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_SYSTEMD_CGROUP: '/system.slice/balena-supervisor.service',
			_SYSTEMD_SLICE: 'system.slice',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_UNIT: 'balena-supervisor.service',
			_COMM: 'balena',
			MESSAGE:
				'[\u001b[47m\u001b[30mapi\u001b[39m\u001b[49m]     GET /v1/healthy 200 - 4.877 ms',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=caaef;b=53771babcbc44a298bb35a0e0207a58e;m=2af4e03294;t=5de4527564db6;x=652d6a65d9d4762b',
		},
	},
	{
		level: 'error',
		message: {
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			_SYSTEMD_UNIT: 'balena.service',
			__REALTIME_TIMESTAMP: '1651763638370562',
			_GID: '0',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			SYSLOG_IDENTIFIER: 'balenad',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			_COMM: 'balena-engine-c',
			__MONOTONIC_TIMESTAMP: '184657700325',
			_UID: '0',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_TRANSPORT: 'stdout',
			_HOSTNAME: '0daeb01',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_EXE: '/usr/bin/balena-engine',
			MESSAGE:
				'time="2022-05-05T15:13:58.370282990Z" level=error msg="shim balena-engine-containerd-shim started" address=/containerd-shim/5fb63f5a22e5cd7f675fc2fcc956f7e56070960653bd2809f47be0c222f39220.sock debug=false pid=735869',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=cab52;b=53771babcbc44a298bb35a0e0207a58e;m=2afe74e5e5;t=5de4530eb0102;x=6f24cc0fceaf693d',
			SYSLOG_FACILITY: '3',
			_PID: '1034',
		},
	},
	{
		level: 'fatal',
		message: {
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=cab84;b=53771babcbc44a298bb35a0e0207a58e;m=2afe843064;t=5de4530fa4b85;x=741dac4f1329f20f',
			_CMDLINE:
				'balena-engine-containerd --config /var/run/balena-engine/containerd/containerd.toml --log-level info',
			_EXE: '/usr/bin/balena-engine',
			_PID: '1034',
			_SYSTEMD_UNIT: 'balena.service',
			SYSLOG_IDENTIFIER: 'balenad',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_TRANSPORT: 'stdout',
			_SYSTEMD_SLICE: 'system.slice',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			_GID: '0',
			_CAP_EFFECTIVE: '1ffffffffff',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			SYSLOG_FACILITY: '3',
			PRIORITY: '6',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__REALTIME_TIMESTAMP: '1651763639372677',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			_UID: '0',
			MESSAGE:
				'time="2022-05-05T15:13:59.372498744Z" level=fatal msg="shim reaped" id=41b9f1b0750c0206007b5cd15c9c6bc7ae7554fd717f85079626689e6a06a831',
			__MONOTONIC_TIMESTAMP: '184658702436',
			_HOSTNAME: '0daeb01',
			_COMM: 'balena-engine-c',
		},
	},
	{
		level: 'debug',
		message: {
			_UID: '0',
			_SYSTEMD_INVOCATION_ID: '3de49521226f4be08f7f38c0664f9e86',
			_CMDLINE:
				'/usr/bin/balenad --experimental --log-driver=journald --storage-driver=aufs -H fd:// -H unix:///var/run/balena.sock -H unix:///var/run/balena-engine.sock -H tcp://0.0.0.0:2375 --dns=10.114.102.1 --bip=10.114.101.1/24 --fixed-cidr=10.114.101.0/25 --max-download-attempts=10 --exec-opt=native.cgroupdriver=systemd',
			_GID: '0',
			_TRANSPORT: 'stdout',
			__REALTIME_TIMESTAMP: '1651763639380954',
			__MONOTONIC_TIMESTAMP: '184658710713',
			_CAP_EFFECTIVE: '1ffffffffff',
			_EXE: '/usr/bin/balena-engine',
			_COMM: 'balenad',
			_STREAM_ID: '4a016422e78e41529c0a3074a111c6e7',
			_MACHINE_ID: '22e5031ba9f940989b671e46697279d5',
			MESSAGE:
				'time="2022-05-05T15:13:59.380784313Z" level=debug msg="ignoring event" module=libcontainerd namespace=moby topic=/tasks/delete type="*events.TaskDelete"',
			_PID: '899',
			_SYSTEMD_UNIT: 'balena.service',
			_HOSTNAME: '0daeb01',
			_BOOT_ID: '53771babcbc44a298bb35a0e0207a58e',
			PRIORITY: '6',
			_SYSTEMD_SLICE: 'system.slice',
			_SYSTEMD_CGROUP: '/system.slice/balena.service',
			__CURSOR:
				's=72735acd906d4f6787affa525344e916;i=cab85;b=53771babcbc44a298bb35a0e0207a58e;m=2afe8450b9;t=5de4530fa6bda;x=7bf1d84d3ea67eb9',
			SYSLOG_IDENTIFIER: 'balenad',
			SYSLOG_FACILITY: '3',
		},
	},
];

for (const journalEvent of events) {
	test('convert journal events to sentry events', () => {
		const sentryEvent = convertToSentryEvent(journalEvent.message);
		try {
			expect(sentryEvent.level).toBe(journalEvent.level);
		} catch (error) {
			console.log(
				`event.message: ${journalEvent.message.MESSAGE} failed because: ${error}`,
			);
			throw error;
		}
	});
}
