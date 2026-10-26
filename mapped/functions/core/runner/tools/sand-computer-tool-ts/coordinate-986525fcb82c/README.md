# `coordinate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-computer-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777081-777084](../../../../../../../reference/runtime/host-main.cjs#L777081-L777084) | `FunctionDeclaration` | não | `x, y` |
| [evaluation:576726-576729](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576726-L576729) | `FunctionDeclaration` | não | `x, y` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777081-777084](../../../../../../../reference/runtime/host-main.cjs#L777081-L777084) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576726-576729](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576726-L576729) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777081

Chamadas escritas diretamente neste corpo: `new Coordinate`.

SHA-256 do trecho: `21b24281137976aa9e10faab24bb252bbe6e6d66a76b85250b2a146ff40d6f0e`.

### evaluation:576726

Chamadas escritas diretamente neste corpo: `new Coordinate`.

SHA-256 do trecho: `21b24281137976aa9e10faab24bb252bbe6e6d66a76b85250b2a146ff40d6f0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
