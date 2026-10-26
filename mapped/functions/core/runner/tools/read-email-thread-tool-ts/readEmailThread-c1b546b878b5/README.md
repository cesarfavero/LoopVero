# `readEmailThread`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-email-thread-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765094-765107](../../../../../../../reference/runtime/host-main.cjs#L765094-L765107) | `FunctionDeclaration` | sim | `deps, args` |
| [evaluation:558462-558475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558462-L558475) | `FunctionDeclaration` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765094-765107](../../../../../../../reference/runtime/host-main.cjs#L765094-L765107) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:558462-558475](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558462-L558475) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:765094

Chamadas escritas diretamente neste corpo: `Math.min`, `deps.email.readThread`, `renderEmailThread`.

SHA-256 do trecho: `e8c80fd2d3bcff04ae4b7412980458c4ac9ba3c6bfdeb8702e5f99b6a6e31083`.

### evaluation:558462

Chamadas escritas diretamente neste corpo: `Math.min`, `deps.email.readThread`, `renderEmailThread`.

SHA-256 do trecho: `e8c80fd2d3bcff04ae4b7412980458c4ac9ba3c6bfdeb8702e5f99b6a6e31083`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
