# `checkSingleChange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/ios-control-home.ts` · [README do módulo](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758669-758693](../../../../../../reference/runtime/host-main.cjs#L758669-L758693) | `FunctionDeclaration` | não | `{ accessory, kind, all, control, value }, ctx` |
| [evaluation:548829-548853](../../../../../../reference/runtime/sand-eval-runner.cjs#L548829-L548853) | `FunctionDeclaration` | não | `{ accessory, kind, all, control, value }, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758669-758693](../../../../../../reference/runtime/host-main.cjs#L758669-L758693) | 5 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:548829-548853](../../../../../../reference/runtime/sand-eval-runner.cjs#L548829-L548853) | 5 | 0 | 0 | 0 | 0 | 0 |

### host:758669

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `valueFits`.

SHA-256 do trecho: `08d4d862ced8d8a2714a61928796d07b4b3e1f1e41db9005f928e6ecf5b5ab31`.

### evaluation:548829

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `valueFits`.

SHA-256 do trecho: `08d4d862ced8d8a2714a61928796d07b4b3e1f1e41db9005f928e6ecf5b5ab31`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
