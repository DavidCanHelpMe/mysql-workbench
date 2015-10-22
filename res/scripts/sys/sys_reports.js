{
  "categories" : {"problems" : "High Cost SQL Statements", "schema" : "Database Schema Statistics",  "top": "Most Active Tables", "innodb" : "InnoDB Statistics", "io" : "Hot Spots for I/O", "wait": "Wait Event Times (Expert)"}, 
  "reports" : [
  {"category" : "io",
   "view" : "x$io_global_by_file_by_bytes",
   "description" : "Show the Files doing the most IOs in bytes",
   "caption" : "Top File I/O Activity Report",
   "columns" : [["File", "file", "StringLT", 200],
                ["Total IOs (#)", "total", "LongInteger", 80],
                ["Read Requests (#)", "count_read", "LongInteger", 80],
                ["Total Read IO", "total_read", "Bytes", 80],
                ["Avg Read IO", "avg_read", "Bytes", 80],
                ["Write Requests (#)", "count_write", "LongInteger", 80],
                ["Total Write IO", "total_written", "Bytes", 80],
                ["Avg Write IO", "avg_write", "Bytes", 80],
                ["Write %", "write_pct", "String", 80]]
  },

  { "category" : "io",
    "view" : "x$io_global_by_file_by_latency",
    "description" : "Show highest IO usage by file and latency",
    "caption" : "Top I/O by File by Time",
    "columns" : [["File", "file", "StringLT", 200],
                 ["Total IOs (#)", "total", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Read Requests (#)", "count_read", "LongInteger", 80],
                 ["Read Time", "read_latency", "Time", 80],
                 ["Write Requests (#)", "count_write", "LongInteger", 80],
                 ["Write Time", "write_latency", "Time", 80],
                 ["Misc Requests (#)", "count_misc", "LongInteger", 80],
                 ["Misc Time", "misc_latency", "Time", 80]]
  },

  {"category" : "io",
   "view" : "x$io_global_by_wait_by_bytes",
   "description" : "Show the highest IO Data usage by event categories",
   "caption" : "Top I/O by Event Category",
   "columns" : [["IO Event Type", "event_name", "String", 200],
                ["Total IOs (#)", "total", "LongInteger", 80],
                ["Total Time", "total_latency", "Time", 80],
                ["Min Time", "min_latency", "Time", 80],
                ["Avg Time", "avg_latency", "Time", 80],
                ["Max Time", "max_latency", "Time", 80],
                ["Reads (#)", "count_read", "LongInteger", 80],
                ["Total Read", "total_read", "Bytes", 80],
                ["Avg Read", "avg_read", "Bytes", 80],
                ["Writes (#)", "count_write", "LongInteger", 80],
                ["Total Written", "total_written", "Bytes", 80],
                ["Avg Written", "avg_written", "Bytes", 80],
                ["Total Requested", "total_requested", "Bytes", 80]]
  },

  {"category" : "io",
   "view" : "x$io_global_by_wait_by_latency",
   "description" : "Show the highest IO time consumers by event categories",
   "caption" : "Top I/O in Time by Event Categories",
   "columns" : [["IO Event Type", "event_name", "String", 200],
                ["Total IOs (#)", "total", "LongInteger", 80],
                ["Total Time", "total_latency", "Time", 80],
                ["Avg Time", "avg_latency", "Time", 80],
                ["Max Time", "max_latency", "Time", 80],
                ["Read Time", "read_latency", "Time", 80],
                ["Write Time", "write_latency", "Time", 80],
                ["Misc Time", "misc_latency", "Time", 80],
                ["Reads", "count_read", "Bytes", 80],
                ["Avg Read", "total_read", "Bytes", 80],
                ["Writes", "count_write", "Bytes", 80],
                ["Total Written", "total_written", "Bytes", 80],
                ["Avg Written", "avg_written", "Bytes", 80]]
  },

  { "category" : "io",
    "view" : "x$io_by_thread_by_latency",
    "description" : "Show the top IO time consumers by User/thread",
    "caption" : "Top I/O Time by User/Thread",
    "columns" : [["User", "user", "String", 150],
                 ["Thread Id", "thread_id", "LongInteger", 80],
                 ["Process List Id", "processlist_id", "LongInteger", 80],
                 ["Total IOs (#)", "total", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Min Time", "min_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Max Time", "max_latency", "Time", 80]]
  },

  { "category" : "problems",
    "view" : "x$statement_analysis",
    "description" : "Lists statements with various aggregated statistics",
    "caption" : "Statement Analysis",
    "columns" : [["Query", "query", "String", 300],
                 ["Full Table Scan", "full_scan", "String", 80],
                 ["Executed (#)", "exec_count", "LongInteger", 80],
                 ["Errors (#)", "err_count", "LongInteger", 80],
                 ["Warnings (#)", "warn_count", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Max Time", "max_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Rows Sent (#)", "rows_sent", "LongInteger", 80],
                 ["Avg. Rows Sent (#)", "rows_sent_avg", "Float", 80],
                 ["Rows Scanned (#)", "rows_examined", "LongInteger", 80],
                 ["Avg. Rows Scanned (#)", "rows_examined_avg", "Float", 80],
                 ["Temp. Tables (#)", "tmp_tables", "LongInteger", 80],
                 ["Temp. Disk Tables (#)", "tmp_disk_tables", "LongInteger", 80],
                 ["Rows Sorted (#)", "rows_sorted", "LongInteger", 80],
                 ["Sort Merge Passes (#)", "sort_merge_passes", "LongInteger", 80],
                 ["Digest", "digest", "String", 100]
                 ]
  },

  { "category" : "problems",
    "view" : "x$statements_with_runtimes_in_95th_percentile",
    "description" : "List all statements whose average runtime, in microseconds is in highest 5 percent",
    "caption" : "Statements in Highest 5 Percent by Runtime",
    "columns" : [["Query", "query", "String", 300],
                 ["Full Table Scan", "full_scan", "String", 50],
                 ["Executed (#)", "exec_count", "LongInteger", 80],
                 ["Errors (#)", "err_count", "LongInteger", 80],
                 ["Warnings (#)", "warn_count", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Maximum Time", "max_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Rows Sent (#)", "rows_sent", "LongInteger", 80],
                 ["Avg. Rows Sent (#)", "rows_sent_avg", "Float", 80],
                 ["Rows Scanned (#)", "rows_examined", "LongInteger", 80],
                 ["Avg. Rows Scanned (#)", "rows_examined_avg", "Float", 80],
                 ["Digest", "digest", "String", 100]
                 ]
  },

  { "category" : "problems",
    "view" : "statements_with_temp_tables",
    "description" : "Lists all statements that use temporary tables -  access the highest # of disk temporary tables, then memory temp tables",
    "caption" : "Using Temp Tables",
    "columns" : [["Query", "query", "String", 300],
                 ["Executed (#)", "exec_count", "LongInteger", 80],
                 ["Tmp Tables in Memory (#)", "memory_tmp_tables", "LongInteger", 80],
                 ["Tmp Tables on Disk (#)", "disk_tmp_tables", "LongInteger", 80],
                 ["Avg. Tmp Tables/Query (#)", "avg_tmp_tables_per_query", "Float", 80],
                 ["Percent Tmp Tables to Disk (%)", "tmp_tables_to_disk_pct", "Float", 80],
                 ["Digest", "digest", "String", 100]
                 ]
  },

  { "category" : "problems",
    "view" : "statements_with_sorting",
    "description" : "List all normalized statements that have done sorts, access in the following priority order - sort_merge_passes, sort_scans and sort_rows",
    "caption" : "With Sorting",
    "columns" : [["Query", "query", "String", 500],
                 ["Executed (#)", "exec_count", "LongInteger", 80],
                 ["Sort Merge Passes (#)", "sort_merge_passes", "LongInteger", 80],
                 ["Avg Sort Merges (#)", "avg_sort_merges", "Float", 80],
                 ["Sorts Using Scans (#)", "sorts_using_scans", "LongInteger", 80],
                 ["Sorts Using Range (#)", "sort_using_range", "LongInteger", 80],
                 ["Rows Sorted (#)", "rows_sorted", "LongInteger", 80],
                 ["Avg Rows Sorted (#)", "avg_rows_sorted", "Float", 80],
                 ["Digest", "digest", "String", 100]
                 ]
  },

  { "category" : "problems",
    "view" : "statements_with_full_table_scans",
    "description" : "Lists statements that have performed a full table scan. Access query performance and the where clause(s) and if no index is used, consider adding indexes for large tables",
    "caption" : "Full Table Scans",
    "columns" : [["Query", "query", "String", 300],
                 ["Executed (#)", "exec_count", "LongInteger", 80],
                 ["No Index Used", "no_index_used_count", "LongInteger", 80],
                 ["No Good Index Used", "no_good_index_used_count", "LongInteger", 80],
                 ["No Index Used %", "no_index_used_pct", "Float", 80],
                 ["Digest", "digest", "String", 100]
                 ]
  },

  { "category" : "problems",
    "view" : "statements_with_errors_or_warnings",
    "description" : "List statements that have raised errors or warnings.",
    "caption" : "Errors or Warnings",
    "columns" : [["Query", "query", "String", 300],
                 ["Executed (#)", "exec_count", "LongInteger", 80],
                 ["Errors (#)", "errors", "LongInteger", 80],
                 ["Error (%)", "error_pct", "Float", 50],
                 ["Warnings (#)", "warnings", "LongInteger", 80],
                 ["Warnings (%)", "warning_pct", "Float", 50],
                 ["Digest", "digest", "String", 100]
                 ]
  },

  { "category" : "schema",
    "view" : "schema_object_overview",
    "description" : "Shows count by object type for each schema.\nNote: On instances with a large number of objects, this can take some time to execute.",
    "caption" : "Schema Object Overview (High Overhead)",
    "columns" : [["Schema", "db", "String", 150],
                 ["Object Type", "object_type", "String", 150],
                 ["Count", "count", "LongInteger", 80]
                 ]
  },


  { "category" : "schema",
    "view" : "x$schema_index_statistics",
    "description" : "",
    "caption" : "Schema Index Statistics",
    "columns" : [["Schema", "table_schema", "String", 100],
                 ["Table", "table_name", "String", 100],
                 ["Index", "index_name", "String", 100],
                 ["Rows Selected (#)", "rows_selected", "LongInteger", 80],
                 ["Select Time", "select_latency", "Time", 80],
                 ["Rows Inserted (#)", "rows_inserted", "LongInteger", 80],
                 ["Insert Time", "insert_latency", "Time", 80],
                 ["Rows Updated (#)", "rows_updated", "LongInteger", 80],
                 ["Update Time", "update_latency", "Time", 80],
                 ["Rows Deleted (#)", "rows_deleted", "LongInteger", 80],
                 ["Delete Time", "delete_latency", "Time", 80]
                 ]
  },

  { "category" : "schema",
    "view" : "x$schema_table_statistics",
    "description" : "",
    "caption" : "Schema Table Statistics",
    "columns" : [["Schema", "table_schema", "String", 100],
                 ["Table", "table_name", "String", 100],
                 ["Rows Fetched", "rows_fetched", "LongInteger", 80],
                 ["Fetch Time", "fetch_latency", "Time", 80],
                 ["Rows Inserted (#)", "rows_inserted", "LongInteger", 80],
                 ["Insert Time", "insert_latency", "Time", 80],
                 ["Rows Updated (#)", "rows_updated", "LongInteger", 80],
                 ["Update Time", "update_latency", "Time", 80],
                 ["Rows Deleted (#)", "rows_deleted", "LongInteger", 80],
                 ["Delete Time", "delete_latency", "Time", 80],
                 ["I/O Read Reqs (#)", "io_read_requests", "LongInteger", 80],
                 ["I/O Read (#)", "io_read", "LongInteger", 80],
                 ["I/O Read Time", "io_read_latency", "Time", 80],
                 ["I/O Write Reqs (#)", "io_write_requests", "LongInteger", 80],
                 ["I/O Write (#)", "io_write", "LongInteger", 80],
                 ["I/O Write Time", "io_write_latency", "Time", 80],
                 ["I/O Misc. Reqs (#)", "io_misc_requests", "LongInteger", 80],
                 ["I/O Misc. Time", "io_misc_latency", "Time", 80]
                 ]
  },

  { "category" : "schema",
    "view" : "x$schema_table_statistics_with_buffer",
    "description" : "",
    "caption" : "Schema Table Statistics (with InnoDB buffer)",
    "columns" : [["Schema", "table_schema", "String", 100],
                 ["Table", "table_name", "String", 100],
                 ["Rows Fetched (#)", "rows_fetched", "LongInteger", 80],
                 ["Fetch Time", "fetch_latency", "Time", 80],
                 ["Rows Inserted (#)", "rows_inserted", "LongInteger", 80],
                 ["Insert Time", "insert_latency", "Time", 80],
                 ["Rows Updated (#)", "rows_updated", "LongInteger", 80],
                 ["Update Time", "update_latency", "Time", 80],
                 ["Rows Deleted (#)", "rows_deleted", "LongInteger", 80],
                 ["Delete Time", "delete_latency", "Time", 80],
                 ["I/O Read Reqs (#)", "io_read_requests", "LongInteger", 80],
                 ["I/O Read (#)", "io_read", "LongInteger", 80],
                 ["I/O Read Time", "io_read_latency", "Time", 80],
                 ["I/O Write Reqs (#)", "io_write_requests", "LongInteger", 80],
                 ["I/O Write (#)", "io_write", "LongInteger", 80],
                 ["I/O Write Time", "io_write_latency", "Time", 80],
                 ["I/O Misc. Reqs (#)", "io_misc_requests", "LongInteger", 80],
                 ["I/O Misc. Time", "io_misc_latency", "Time", 80],
                 ["Buffer Allocated", "innodb_buffer_allocated", "LongInteger", 80],
                 ["Buffer Data", "innodb_buffer_data", "LongInteger", 80],
                 ["Buffer Pages", "innodb_buffer_pages", "LongInteger", 80],
                 ["Buffer Pages Hashed", "innodb_buffer_pages_hashed", "LongInteger", 80],
                 ["Buffer Pages Old", "innodb_buffer_pages_old", "LongInteger", 80],
                 ["Buffer Rows Cached", "innodb_buffer_rows_cached", "LongInteger", 80]
                 ]
  },

  { "category" : "schema",
    "view" : "schema_tables_with_full_table_scans",
    "description" : "Find tables that are being accessed by full table scans ordering by the number of rows scanned descending",
    "caption" : "Tables with Full Table Scans",
    "columns" : [["Schema", "object_schema", "String", 100],
                 ["Object", "object_name", "String", 100],
                 ["Full Scanned Rows (#)", "rows_full_scanned", "LongInteger", 80]]
  },

   {"category" : "schema",
    "view" : "schema_unused_indexes",
    "description" : "List of indexes that were never used since the server started or since P_S data collection started.",
    "caption" : "Unused Indexes",
    "columns" : [["Schema", "object_schema", "String", 100],
                 ["Object", "object_name", "String", 100],
                 ["Index", "index_name", "String", 100]]
  },

  { "category" : "wait",
    "view" : "x$waits_global_by_latency",
    "description" : "Lists the top wait events by their total time, ignoring idle (this may be very large)",
    "caption" : "Global Waits by Time",
    "columns" : [["Event Class", "events", "String", 200],
                 ["Total # Events", "total", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Max Time", "max_latency", "Time", 80]]
  },

  { "category" : "wait",
    "view" : "x$waits_by_user_by_latency",
    "description" : "Lists the top wait events by their total time, ignoring idle (this may be very large)",
    "caption" : "Waits by User by Time",
    "columns" : [["User", "user", "String", 200],
                 ["Event", "event", "String", 200],
                 ["Total # Events", "total", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Max Time", "max_latency", "Time", 80]]
  },

  { "category" : "wait",
    "view" : "x$wait_classes_global_by_latency",
    "description" : "Lists the top wait classes by total time, ignoring idle (this may be very large)",
    "caption" : "Wait Classes by Time",
    "columns" : [["Event Class", "event_class", "String", 200],
                 ["Total # Events", "total", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Max Time", "max_latency", "Time", 80]]
  },

  { "category" : "wait",
    "view" : "x$wait_classes_global_by_avg_latency",
    "description" : "Lists the top wait classes by average time, ignoring idle (this may be very large)",
    "caption" : "Waits Classes by Average Time",
    "columns" : [["Event Class", "event_class", "String", 200],
                 ["Total # Events", "total", "LongInteger", 80],
                 ["Total Time", "total_latency", "Time", 80],
                 ["Avg Time", "avg_latency", "Time", 80],
                 ["Max Time", "max_latency", "Time", 80]]
  },

  { "category" : "innodb",
  "view" : "x$innodb_buffer_stats_by_schema",
  "description" : "Summarizes the output of the INFORMATION_SCHEMA.INNODB_BUFFER_PAGE table, aggregating by schema",
  "caption" : "InnoDB Buffer Stats by Schema",
  "columns" : [["Schema", "object_schema", "String", 200],
              ["Allocated", "allocated", "LongInteger", 80],
              ["Data", "data", "LongInteger", 80],
              ["Pages", "pages", "LongInteger", 80],
              ["Pages Hashed", "pages_hashed", "LongInteger", 80],
              ["Pages Old", "pages_old", "LongInteger", 80],
              ["Rows Cached", "rows_cached", "LongInteger", 80]
              ]
  },
               
  { "category" : "innodb",
  "view" : "x$innodb_buffer_stats_by_table",
  "description" : "Summarizes the output of the INFORMATION_SCHEMA.INNODB_BUFFER_PAGE table, aggregating by schema and table name",
  "caption" : "InnoDB Buffer Stats by Table",
  "columns" : [["Schema", "object_schema", "String", 200],
              ["Table", "object_name", "String", 200],
              ["Allocated", "allocated", "LongInteger", 80],
              ["Data", "data", "LongInteger", 80],
              ["Pages", "pages", "LongInteger", 80],
              ["Pages Hashed", "pages_hashed", "LongInteger", 80],
              ["Pages Old", "pages_old", "LongInteger", 80],
              ["Rows Cached", "rows_cached", "LongInteger", 80]
              ]
  }
]
}

