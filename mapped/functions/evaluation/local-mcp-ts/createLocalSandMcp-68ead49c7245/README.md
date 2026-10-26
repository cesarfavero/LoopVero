# `createLocalSandMcp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/integrations/README.md).

**Módulo:** `evaluation/local-mcp.ts` · [README do módulo](../../../../modules/evaluation/local-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628152-628186](../../../../../reference/runtime/sand-eval-runner.cjs#L628152-L628186) | `FunctionDeclaration` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628152-628186](../../../../../reference/runtime/sand-eval-runner.cjs#L628152-L628186) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628152

Chamadas escritas diretamente neste corpo: `.withName`, `createContext`, `loader2.load`, `new FileConfigMcpLoader`, `new InMemoryTokenStorage`, `new LocalMcpToolExecutor`, `new ManagerMcpLease`, `new MockPendingDecisionProvider`, `new MockPermissionsService`.

SHA-256 do trecho: `bae330ddad53f8d9b7476daf007c10e8a8ac29d8aa938b4c88aab98ba35920f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
