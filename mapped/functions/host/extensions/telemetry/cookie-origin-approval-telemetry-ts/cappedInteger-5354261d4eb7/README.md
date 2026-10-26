# `cappedInteger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/approvals/README.md).

**Módulo:** `host/extensions/telemetry/cookie-origin-approval-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/cookie-origin-approval-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:456161-456164](../../../../../../../reference/runtime/host-main.cjs#L456161-L456164) | `FunctionDeclaration` | não | `value, cap` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456161-456164](../../../../../../../reference/runtime/host-main.cjs#L456161-L456164) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:456161

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Math.round`, `Number.isFinite`.

SHA-256 do trecho: `92fcf5b628e154ff3d09abecd92493f856039361966890cbe6b8129ee3ef6bbb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
