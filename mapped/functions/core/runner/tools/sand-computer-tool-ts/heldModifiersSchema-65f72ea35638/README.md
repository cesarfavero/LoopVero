# `heldModifiersSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776890-776895](../../../../../../../reference/runtime/host-main.cjs#L776890-L776895) | `FunctionDeclaration` | não | `(nenhum)` |
| [evaluation:576535-576540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576535-L576540) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776890-776895](../../../../../../../reference/runtime/host-main.cjs#L776890-L776895) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576535-576540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576535-L576540) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776890

Chamadas escritas diretamente neste corpo: `.refine`, `.transform`, `HELD_MODIFIER_KEYS.join`, `external_exports2.string`.

SHA-256 do trecho: `09c797f7a190ad05cf4a9dd94c021b3c624bf71ff2800cc8cee8af049114ed65`.

### evaluation:576535

Chamadas escritas diretamente neste corpo: `.refine`, `.transform`, `HELD_MODIFIER_KEYS.join`, `external_exports3.string`.

SHA-256 do trecho: `17fc9b253ca964c380778c6017c468d66a4c630bdff041eb89b579493b31bb4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
