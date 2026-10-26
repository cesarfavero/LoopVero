# `connectCardServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225988-225991](../../../../../../reference/runtime/host-main.cjs#L225988-L225991) | `FunctionDeclaration` | não | `server` |
| [evaluation:495212-495215](../../../../../../reference/runtime/sand-eval-runner.cjs#L495212-L495215) | `FunctionDeclaration` | não | `server` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225988-225991](../../../../../../reference/runtime/host-main.cjs#L225988-L225991) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495212-495215](../../../../../../reference/runtime/sand-eval-runner.cjs#L495212-L495215) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:225988

Chamadas escritas diretamente neste corpo: `isUnstoredMcpListingServerId`, `server.serverIdentifier.trim`.

SHA-256 do trecho: `c75cde1c7e210273280d66d2ec2630d95dca3823a3fba58310fc5db232c529e2`.

### evaluation:495212

Chamadas escritas diretamente neste corpo: `isUnstoredMcpListingServerId`, `server.serverIdentifier.trim`.

SHA-256 do trecho: `c75cde1c7e210273280d66d2ec2630d95dca3823a3fba58310fc5db232c529e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
