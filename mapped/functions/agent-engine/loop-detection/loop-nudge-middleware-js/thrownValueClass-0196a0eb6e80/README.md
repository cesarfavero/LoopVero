# `thrownValueClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/loop-nudge-middleware.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/loop-nudge-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:458220-458233](../../../../../../reference/runtime/sand-eval-runner.cjs#L458220-L458233) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:458220-458233](../../../../../../reference/runtime/sand-eval-runner.cjs#L458220-L458233) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:458220

Chamadas escritas diretamente neste corpo: `Reflect.get`.

SHA-256 do trecho: `1c6812c2aa713f7106a91dbb16eff9576067317f3093222005994edaadd969ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
