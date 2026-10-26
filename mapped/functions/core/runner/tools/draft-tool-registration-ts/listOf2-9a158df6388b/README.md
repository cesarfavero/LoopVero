# `listOf2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756259-756262](../../../../../../../reference/runtime/host-main.cjs#L756259-L756262) | `FunctionDeclaration` | não | `items` |
| [evaluation:542180-542183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542180-L542183) | `FunctionDeclaration` | não | `items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756259-756262](../../../../../../../reference/runtime/host-main.cjs#L756259-L756262) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:542180-542183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542180-L542183) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:756259

Chamadas escritas diretamente neste corpo: `.join`, `items.at`, `items.join`, `items.slice`.

SHA-256 do trecho: `8044dc0b9438b00161a89d70106997ecf173eb328a2792032d844a1902c0d98a`.

### evaluation:542180

Chamadas escritas diretamente neste corpo: `.join`, `items.at`, `items.join`, `items.slice`.

SHA-256 do trecho: `8044dc0b9438b00161a89d70106997ecf173eb328a2792032d844a1902c0d98a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
