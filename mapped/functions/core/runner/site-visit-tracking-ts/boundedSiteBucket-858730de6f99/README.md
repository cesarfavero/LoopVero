# `boundedSiteBucket`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/site-visit-tracking.ts` · [README do módulo](../../../../../modules/core/runner/site-visit-tracking-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454743-454757](../../../../../../reference/runtime/host-main.cjs#L454743-L454757) | `FunctionDeclaration` | não | `hostname4` |
| [evaluation:483969-483983](../../../../../../reference/runtime/sand-eval-runner.cjs#L483969-L483983) | `FunctionDeclaration` | não | `hostname3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454743-454757](../../../../../../reference/runtime/host-main.cjs#L454743-L454757) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:483969-483983](../../../../../../reference/runtime/sand-eval-runner.cjs#L483969-L483983) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:454743

Chamadas escritas diretamente neste corpo: `.join`, `.replace`, `CC_SECOND_LEVEL_LABELS.has`, `COMMON_PUBLIC_GTLDS.has`, `DELEGATED_CC_TLDS.has`, `PRIVATE_TLDS.has`, `host.endsWith`, `host.split`, `host.startsWith`, `hostname4.toLowerCase`, `labels.slice`, `mint`.

SHA-256 do trecho: `8f413fb1fb9e905fbfb2baaf07c81b5a9fc8283352f0c0aba8c5460a810fbdfc`.

### evaluation:483969

Chamadas escritas diretamente neste corpo: `.join`, `.replace`, `CC_SECOND_LEVEL_LABELS.has`, `COMMON_PUBLIC_GTLDS.has`, `DELEGATED_CC_TLDS.has`, `PRIVATE_TLDS.has`, `host.endsWith`, `host.split`, `host.startsWith`, `hostname3.toLowerCase`, `labels.slice`, `mint`.

SHA-256 do trecho: `7060362aecdda92248f5b8ca814f6eeff1076d760ab007e31502355dba525677`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
