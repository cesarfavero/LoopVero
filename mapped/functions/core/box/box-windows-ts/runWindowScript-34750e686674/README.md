# `runWindowScript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553961-554005](../../../../../../reference/runtime/host-main.cjs#L553961-L554005) | `FunctionDeclaration` | sim | `ctx, accessor, label, windowIndex, opts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553961-554005](../../../../../../reference/runtime/host-main.cjs#L553961-L554005) | 8 | 0 | 1 | 1 | 7 | 0 |

### host:553961

Chamadas escritas diretamente neste corpo: `BOX_FILE_PATH_PATTERN.test`, `SAND_BOX_WINDOW_OWNER_TOKEN_PATTERN.test`, `accessor.get`, `buildHostShellArgs`, `isPrimaryWindowIndex`, `new SandBoxNoMonitorAvailableError`, `new SandBoxWindowBusyError`, `new SandBoxWindowError`, `new SandBoxWindowSeatStaleError`, `reportHostDiagnostic`, `shell.execute`, `windowScriptCommand`.

Alvos de lançamento explícito: `SandBoxNoMonitorAvailableError`, `SandBoxWindowBusyError`, `SandBoxWindowError`, `SandBoxWindowSeatStaleError`.

SHA-256 do trecho: `447b89a1360da4f75449bfea6de09f70095e32f4d8575faf6b5a799ffed3f2f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
