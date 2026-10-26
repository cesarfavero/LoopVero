# `mcpAppToolResultPayload`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-emitter.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701406-701427](../../../../../../../reference/runtime/host-main.cjs#L701406-L701427) | `FunctionDeclaration` | não | `success2` |
| [evaluation:585378-585399](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585378-L585399) | `FunctionDeclaration` | não | `success2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701406-701427](../../../../../../../reference/runtime/host-main.cjs#L701406-L701427) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:585378-585399](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585378-L585399) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:701406

Chamadas escritas diretamente neste corpo: `success2.content.flatMap`, `success2.structuredContent.toJson`.

SHA-256 do trecho: `cd5493cb884cedcfc1a90ed8fb8111b37026f65cdf18713d81ac1f32de18db48`.

### evaluation:585378

Chamadas escritas diretamente neste corpo: `success2.content.flatMap`, `success2.structuredContent.toJson`.

SHA-256 do trecho: `cd5493cb884cedcfc1a90ed8fb8111b37026f65cdf18713d81ac1f32de18db48`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
