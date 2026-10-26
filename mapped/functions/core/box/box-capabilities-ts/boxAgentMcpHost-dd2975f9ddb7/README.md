# `boxAgentMcpHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-capabilities.ts` · [README do módulo](../../../../../modules/core/box/box-capabilities-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:546716-546718](../../../../../../reference/runtime/host-main.cjs#L546716-L546718) | `FunctionDeclaration` | sim | `box, ctx, agentId` |
| [evaluation:475811-475813](../../../../../../reference/runtime/sand-eval-runner.cjs#L475811-L475813) | `FunctionDeclaration` | sim | `box, ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546716-546718](../../../../../../reference/runtime/host-main.cjs#L546716-L546718) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:475811-475813](../../../../../../reference/runtime/sand-eval-runner.cjs#L475811-L475813) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:546716

Chamadas escritas diretamente neste corpo: `box.agentMcpHost`.

SHA-256 do trecho: `cabd99ed0098812f7678f27bcb30486a4b24a5df81d2096e6699963659c6f30e`.

### evaluation:475811

Chamadas escritas diretamente neste corpo: `box.agentMcpHost`.

SHA-256 do trecho: `cabd99ed0098812f7678f27bcb30486a4b24a5df81d2096e6699963659c6f30e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
