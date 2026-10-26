# `smallestRotation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/agent-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:310673-310682](../../../../../../reference/runtime/sand-eval-runner.cjs#L310673-L310682) | `FunctionDeclaration` | não | `keys` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310673-310682](../../../../../../reference/runtime/sand-eval-runner.cjs#L310673-L310682) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:310673

Chamadas escritas diretamente neste corpo: `keys.slice`, `rotation.findIndex`.

Alvos de atribuição ou incremento: `best`, `start`.

SHA-256 do trecho: `30ce1b12c4c627e1a9164c6ca33cdf909ab0be6dfa686d19cd4146e54f6ad166`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
