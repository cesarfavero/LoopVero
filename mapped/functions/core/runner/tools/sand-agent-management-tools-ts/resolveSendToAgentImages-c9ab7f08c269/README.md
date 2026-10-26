# `resolveSendToAgentImages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-agent-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757370-757379](../../../../../../../reference/runtime/host-main.cjs#L757370-L757379) | `FunctionDeclaration` | sim | `ctx, images, deps` |
| [evaluation:543393-543402](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543393-L543402) | `FunctionDeclaration` | sim | `ctx, images, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757370-757379](../../../../../../../reference/runtime/host-main.cjs#L757370-L757379) | 3 | 1 | 2 | 1 | 0 | 0 |
| [evaluation:543393-543402](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543393-L543402) | 3 | 1 | 2 | 1 | 0 | 0 |

### host:757370

Chamadas escritas diretamente neste corpo: `deps.resolveImageSource`, `resolved.push`, `sendToAgentImageDimensions`.

SHA-256 do trecho: `cd1da840368ebed31c7657ea21b936423b1e744e829abaebd893b21a66cdb20b`.

### evaluation:543393

Chamadas escritas diretamente neste corpo: `deps.resolveImageSource`, `resolved.push`, `sendToAgentImageDimensions`.

SHA-256 do trecho: `cd1da840368ebed31c7657ea21b936423b1e744e829abaebd893b21a66cdb20b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
