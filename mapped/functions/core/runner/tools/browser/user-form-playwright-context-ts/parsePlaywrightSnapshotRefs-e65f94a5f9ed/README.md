# `parsePlaywrightSnapshotRefs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767413-767446](../../../../../../../../reference/runtime/host-main.cjs#L767413-L767446) | `FunctionDeclaration` | não | `text3` |
| [evaluation:562930-562963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562930-L562963) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767413-767446](../../../../../../../../reference/runtime/host-main.cjs#L767413-L767446) | 7 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:562930-562963](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562930-L562963) | 7 | 2 | 0 | 1 | 0 | 0 |

### host:767413

Chamadas escritas diretamente neste corpo: `/^\s*/.exec`, `SNAPSHOT_LEADING_ATTRIBUTES_PATTERN.exec`, `SNAPSHOT_REF_ATTRIBUTE_PATTERN.exec`, `frameStack.findLast`, `frameStack.pop`, `frameStack.push`, `new Map`, `new Set`, `parsed2.name.trim`, `refs.has`, `refs.set`, `repeatedRefs.add`, `roleNameAndAttributes`, `snapshotKeyOf`, `text3.split`, `withSameRoleAndNameOrdinals`.

SHA-256 do trecho: `c038466452ca51d936f091a10020170d0f04ca166f0f8ba6a0d096f924751311`.

### evaluation:562930

Chamadas escritas diretamente neste corpo: `/^\s*/.exec`, `SNAPSHOT_LEADING_ATTRIBUTES_PATTERN.exec`, `SNAPSHOT_REF_ATTRIBUTE_PATTERN.exec`, `frameStack.findLast`, `frameStack.pop`, `frameStack.push`, `new Map`, `new Set`, `parsed.name.trim`, `refs.has`, `refs.set`, `repeatedRefs.add`, `roleNameAndAttributes`, `snapshotKeyOf`, `text3.split`, `withSameRoleAndNameOrdinals`.

SHA-256 do trecho: `4646128637c3718ab761acc47c449681d426d98b7c5ce27a7fb94b2383cb4049`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
