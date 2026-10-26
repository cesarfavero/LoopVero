# `buildHostShellArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-shell-command.ts` · [README do módulo](../../../../../modules/core/box/box-shell-command-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546722-546748](../../../../../../reference/runtime/host-main.cjs#L546722-L546748) | `FunctionDeclaration` | não | `{   command,   name: name18,   workingDirectory,   toolCallId,   timeoutMs }` |
| [evaluation:490785-490811](../../../../../../reference/runtime/sand-eval-runner.cjs#L490785-L490811) | `FunctionDeclaration` | não | `{   command,   name: name18,   workingDirectory,   toolCallId,   timeoutMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546722-546748](../../../../../../reference/runtime/host-main.cjs#L546722-L546748) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490785-490811](../../../../../../reference/runtime/sand-eval-runner.cjs#L490785-L490811) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546722

Chamadas escritas diretamente neste corpo: `new ShellArgs`, `new ShellCommandParsingResult`, `new ShellCommandParsingResult_ExecutableCommand`.

SHA-256 do trecho: `887c75f683889a88ea10567a939edf441031bce7ae34c11086286728f116d6ec`.

### evaluation:490785

Chamadas escritas diretamente neste corpo: `new ShellArgs`, `new ShellCommandParsingResult`, `new ShellCommandParsingResult_ExecutableCommand`.

SHA-256 do trecho: `887c75f683889a88ea10567a939edf441031bce7ae34c11086286728f116d6ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
