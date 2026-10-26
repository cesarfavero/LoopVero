# `SandHost.start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786441-786465](../../../../../reference/runtime/host-main.cjs#L786441-L786465) | `method` | sim | `hooks = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786441-786465](../../../../../reference/runtime/host-main.cjs#L786441-L786465) | 0 | 1 | 2 | 0 | 1 | 1 |

### host:786441

Chamadas escritas diretamente neste corpo: `.createHostLifecycleProgress`, `hostExtensions.api`, `lifecycle2.fail`, `performance.now`, `this.diagnosticsBeforeStart.splice`, `this.reportHostDiagnostic`, `this.startExtensions`, `this.startWithLifecycle`.

Alvos de atribuição ou incremento: `this.hostExtensions`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b7538f6ee2a349799ef839263452fa0aa8688feb9f98bebd8cf1555bd170478a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
