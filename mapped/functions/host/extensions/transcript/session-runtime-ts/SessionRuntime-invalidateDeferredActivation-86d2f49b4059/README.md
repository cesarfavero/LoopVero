# `SessionRuntime.invalidateDeferredActivation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:737872-737876](../../../../../../../reference/runtime/host-main.cjs#L737872-L737876) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737872-737876](../../../../../../../reference/runtime/host-main.cjs#L737872-L737876) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737872

Chamadas escritas diretamente neste corpo: `this.windowedActivationAbort.abort`.

Alvos de atribuição ou incremento: `this.pendingActivationAgentId`, `this.windowedActivationAbort`.

SHA-256 do trecho: `1a7028c470bf74e94c83a4dc5c1078b5e66c42e032219c3db9dd687851fedbe0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
