# `resolveMcpServerRowsByIdentifierOrLegacyId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-server-resolution.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-server-resolution-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779444-779452](../../../../../../../reference/runtime/host-main.cjs#L779444-L779452) | `FunctionDeclaration` | não | `installed, token` |
| [evaluation:579682-579690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579682-L579690) | `FunctionDeclaration` | não | `installed, token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779444-779452](../../../../../../../reference/runtime/host-main.cjs#L779444-L779452) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:579682-579690](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579682-L579690) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:779444

Chamadas escritas diretamente neste corpo: `installed.filter`, `token.trim`.

SHA-256 do trecho: `b1457979d00bae53d079600239d95a8f5a1d4c8ae34f71e2e68f7ff2c57c4524`.

### evaluation:579682

Chamadas escritas diretamente neste corpo: `installed.filter`, `token.trim`.

SHA-256 do trecho: `b1457979d00bae53d079600239d95a8f5a1d4c8ae34f71e2e68f7ff2c57c4524`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
