# `hostnameOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-hosts.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-hosts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:585496-585500](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585496-L585500) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585496-585500](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585496-L585500) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585496

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `URL.canParse`, `entry.trim`, `new URL`, `trimmed.includes`.

SHA-256 do trecho: `68f05ebb0ffe4c8f4cdde25ca27707a6343bffad7173c696ac02ba3aa0391422`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
