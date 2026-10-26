# `resolveSandAgentDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/agent-paths.ts` · [README do módulo](../../../../../modules/host/storage/agent-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494903-494912](../../../../../../reference/runtime/host-main.cjs#L494903-L494912) | `FunctionDeclaration` | não | `agentId, homeDir = (0, import_node_os9.homedir)()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494903-494912](../../../../../../reference/runtime/host-main.cjs#L494903-L494912) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:494903

Chamadas escritas diretamente neste corpo: `assertValidSandAgentId`, `getSandAgentsRootDir`, `new SandInvalidAgentIdError`, `rel.includes`, `rel.startsWith`.

Alvos de lançamento explícito: `SandInvalidAgentIdError`.

SHA-256 do trecho: `6f6e490b0b89eb0d89f09f10afb37ddff96379e726c2ce2aeb37ed88664cde11`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
