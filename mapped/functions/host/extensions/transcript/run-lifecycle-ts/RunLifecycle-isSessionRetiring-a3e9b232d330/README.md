# `RunLifecycle.isSessionRetiring`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/run-lifecycle.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:740017-740019](../../../../../../../reference/runtime/host-main.cjs#L740017-L740019) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740017-740019](../../../../../../../reference/runtime/host-main.cjs#L740017-L740019) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740017

Chamadas escritas diretamente neste corpo: `this.retiringSessions.has`.

SHA-256 do trecho: `77da2c11b529deac3dfbd6c63517585e973acb0b56c31b39528770091a010306`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
