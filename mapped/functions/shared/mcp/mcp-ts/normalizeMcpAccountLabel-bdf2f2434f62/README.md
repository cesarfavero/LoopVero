# `normalizeMcpAccountLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225992-225994](../../../../../../reference/runtime/host-main.cjs#L225992-L225994) | `FunctionDeclaration` | não | `rawLabel` |
| [evaluation:495216-495218](../../../../../../reference/runtime/sand-eval-runner.cjs#L495216-L495218) | `FunctionDeclaration` | não | `rawLabel` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225992-225994](../../../../../../reference/runtime/host-main.cjs#L225992-L225994) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495216-495218](../../../../../../reference/runtime/sand-eval-runner.cjs#L495216-L495218) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225992

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `rawLabel.trim`.

SHA-256 do trecho: `edc24b47b738581b4deb6a8b564a5dbe029434d1c7f95007c88cbc8d613a40fc`.

### evaluation:495216

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `rawLabel.trim`.

SHA-256 do trecho: `edc24b47b738581b4deb6a8b564a5dbe029434d1c7f95007c88cbc8d613a40fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
