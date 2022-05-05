/**
 * Type for systemd.journal events
 *
 * See https://www.freedesktop.org/software/systemd/man/systemd.journal-fields.html
 */

export interface JournalEvent {
	// Docker fields
	CONTAINER_PARTIAL_MESSAGE?: string;
	IMAGE_NAME?: string;
	CONTAINER_ID_FULL?: string;
	CONTAINER_TAG?: string;
	CONTAINER_ID?: string;
	CONTAINER_NAME?: string;

	// -------------------------------------------------------------------------------------------------------
	// User Journal Fields: ( not beginning with _ )
	// The human-readable message string for this entry. This is supposed to be the primary text shown to the user.
	// It is usually not translated (but might be in some cases), and is not supposed to be parsed for metadata.
	MESSAGE: any;
	/*
	A 128-bit message identifier ID for recognizing certain message types, if this is desirable. This should contain a
	128-bit ID formatted as a lower-case hexadecimal string, without any separating dashes or suchlike. This is r
	ecommended to be a UUID-compatible ID, but this is not enforced, and formatted differently. Developers can generate
	a new ID for this purpose with systemd-id128 new.
	*/
	MESSAGE_ID?: string;

	// A priority value between 0 ("emerg") and 7 ("debug") formatted as a decimal string. This field is compatible with syslog's priority concept.
	PRIORITY: string;

	// The code location generating this message, if known. Contains the source filename, the line number and the function name.
	CODE_FILE?: string;
	CODE_LINE?: string;
	CODE_FUNC?: string;

	// The low-level Unix error number causing this entry, if any. Contains the numeric value of errno(3) formatted as a decimal string.
	ERRNO?: string;

	/*
	Syslog compatibility fields containing the facility (formatted as decimal string), the identifier string (i.e. "tag"),
	the client PID, and the timestamp as specified in the original datagram. (Note that the tag is usually derived from
			glibc's program_invocation_short_name variable, see program_invocation_short_name(3).)

	Note that the journal service does not validate the values of any structured journal fields whose name is not prefixed
	with an underscore, and this includes any syslog related fields such as these. Hence, applications that supply a facility,
	PID, or log level are expected to do so properly formatted, i.e. as numeric integers formatted as decimal strings.
	*/
	SYSLOG_FACILITY?: string;
	SYSLOG_IDENTIFIER?: string;
	SYSLOG_PID?: string;
	SYSLOG_TIMESTAMP?: string;

	SYSLOG_RAW?: string;
	DOCUMENTATION?: string;
	TID?: string;
	UNIT?: string;
	USER_UNIT?: string;

	// -------------------------------------------------------------------------------------------------------
	// Trusted Journal Fields
	// Fields prefixed with an underscore are trusted fields, i.e. fields that are implicitly added by the journal and cannot
	// be altered by client code.
	// The process, user, and group ID of the process the journal entry originates from formatted as a decimal string. Note that entries obtained via "stdout" or "stderr" of forked processes will contain credentials valid for a parent process (that initiated the connection to systemd-journald).
	_PID?: string;
	_UID?: string;
	_GID?: string;

	// The name, the executable path, and the command line of the process the journal entry originates from.
	_COMM?: string;
	_EXE?: string;
	_CMDLINE?: string;

	// The effective capabilities(7) of the process the journal entry originates from.
	_CAP_EFFECTIVE?: string;

	// The session and login UID of the process the journal entry originates from, as maintained by the kernel audit subsystem.
	_AUDIT_SESSION?: string;
	_AUDIT_LOGINUID?: string;

	// The control group path in the systemd hierarchy, the systemd slice unit name, the systemd unit name, the unit name in the systemd user manager (if any), the systemd session ID (if any), and the owner UID of the systemd user unit or systemd session (if any) of the process the journal entry originates from.
	_SYSTEMD_CGROUP?: string;
	_SYSTEMD_SLICE?: string;
	_SYSTEMD_UNIT?: string;
	_SYSTEMD_USER_UNIT?: string;
	_SYSTEMD_USER_SLICE?: string;
	_SYSTEMD_SESSION?: string;
	_SYSTEMD_OWNER_UID?: string;

	// The invocation ID for the runtime cycle of the unit the message was generated in, as available to processes of the unit in $INVOCATION_ID (see systemd.exec(5)).
	_SYSTEMD_INVOCATION_ID?: string;

	// 	The SELinux security context (label) of the process the journal entry originates from.
	_SELINUX_CONTEXT?: string;

	// 	The earliest trusted timestamp of the message, if any is known that is different from the reception time of the journal. This is the time in microseconds since the epoch UTC, formatted as a decimal string.
	_SOURCE_REALTIME_TIMESTAMP?: string;

	// 	The kernel boot ID for the boot the message was generated in, formatted as a 128-bit hexadecimal string.
	_BOOT_ID?: string;

	// 	The machine ID of the originating host, as available in machine-id(5).
	_MACHINE_ID?: string;

	// 	The name of the originating host.
	_HOSTNAME?: string;

	// 	How the entry was received by the journal service. Valid transports are:
	// audit
	// for those read from the kernel audit subsystem
	// driver
	// for internally generated messages
	// syslog
	// for those received via the local syslog socket with the syslog protocol
	// journal
	// for those received via the native journal protocol
	// stdout
	// for those read from a service's standard output or error output
	// kernel
	// for those read from the kernel
	_TRANSPORT?: string;

	// 	Only applies to "_TRANSPORT=stdout" records: specifies a randomized 128bit ID assigned to the stream connection when it was first created. This ID is useful to reconstruct individual log streams from the log records: all log records carrying the same stream ID originate from the same stream.
	_STREAM_ID?: string;

	// 	Only applies to "_TRANSPORT=stdout" records: indicates that the log message in the standard output/error stream was not terminated with a normal newline character ("\n", i.e. ASCII 10). Specifically, when set this field is one of nul (in case the line was terminated by a NUL byte), line-max (in case the maximum log line length was reached, as configured with LineMax= in journald.conf(5)), eof (if this was the last log record of a stream and the stream ended without a final newline character), or pid-change (if the process which generated the log output changed in the middle of a line). Note that this record is not generated when a normal newline character was used for marking the log line end.
	_LINE_BREAK?: string;

	// 	If this file was written by a systemd-journald instance managing a journal namespace that is not the default, this field contains the namespace identifier. See systemd-journald.service(8) for details about journal namespaces.
	_NAMESPACE?: string;

	// -------------------------------------------------------------------------------------------------------
	// Kernel Journal Fields
	// Kernel fields are fields that are used by messages originating in the kernel and stored in the journal.
	// The kernel device name. If the entry is associated to a block device, contains the major and minor numbers of the device node, separated by ":" and prefixed by "b". Similarly for character devices, but prefixed by "c". For network devices, this is the interface index prefixed by "n". For all other devices, this is the subsystem name prefixed by "+", followed by ":", followed by the kernel device name.
	_KERNEL_DEVICE?: string;

	// The kernel subsystem name.
	_KERNEL_SUBSYSTEM?: string;

	// The kernel device name as it shows up in the device tree below /sys/.
	_UDEV_SYSNAME?: string;

	// The device node path of this device in /dev/.
	_UDEV_DEVNODE?: string;

	// Additional symlink names pointing to the device node in /dev/. This field is frequently set more than once per entry.
	_UDEV_DEVLINK?: string;

	// -------------------------------------------------------------------------------------------------------
	// Fields to log on behalf of a different program¶
	// TBD, not copied from https://www.freedesktop.org/software/systemd/man/systemd.journal-fields.html
	// -------------------------------------------------------------------------------------------------------
	// Address Fields
	// During serialization into external formats, such as the Journal Export Format or the Journal JSON Format, the addresses of journal entries are serialized into fields prefixed with double underscores. Note that these are not proper fields when stored in the journal but for addressing metadata of entries. They cannot be written as part of structured log entries via calls such as sd_journal_send(3). They may also not be used as matches for sd_journal_add_match(3).
	// The cursor for the entry. A cursor is an opaque text string that uniquely describes the position of an entry in the journal and is portable across machines, platforms and journal files.
	__CURSOR?: string;

	// The wallclock time (CLOCK_REALTIME) at the point in time the entry was received by the journal, in microseconds since the epoch UTC, formatted as a decimal string. This has different properties from "_SOURCE_REALTIME_TIMESTAMP=", as it is usually a bit later but more likely to be monotonic.
	__REALTIME_TIMESTAMP?: string;

	// The monotonic time (CLOCK_MONOTONIC) at the point in time the entry was received by the journal in microseconds, formatted as a decimal string. To be useful as an address for the entry, this should be combined with the boot ID in "_BOOT_ID=".
	__MONOTONIC_TIMESTAMP?: string;
}
