# `refineDraftExternalMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755165-755203](../../../../../../../reference/runtime/host-main.cjs#L755165-L755203) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:539790-539828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539790-L539828) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755165-755203](../../../../../../../reference/runtime/host-main.cjs#L755165-L755203) | 14 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:539790-539828](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539790-L539828) | 14 | 1 | 0 | 2 | 0 | 0 |

### host:755165

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isFieldProvided2`, `refineEmailBodies`, `refineSlackBody`, `requireAddresses`, `requireField`.

SHA-256 do trecho: `b583cfb4a90a5b73a4d4242230af2ee12d4caa9c80873930228a722fb0b2fbc6`.

### evaluation:539790

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `isFieldProvided2`, `refineEmailBodies`, `refineSlackBody`, `requireAddresses`, `requireField`.

SHA-256 do trecho: `42db26d4d770e0202a405435c813011d98925e6704b3ec3b2cfad7523c521458`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
