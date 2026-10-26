# `privateTailnetUrlsAdded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/sand-mcp-management-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780087-780093](../../../../../../../reference/runtime/host-main.cjs#L780087-L780093) | `FunctionDeclaration` | não | `before, after` |
| [evaluation:580332-580338](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580332-L580338) | `FunctionDeclaration` | não | `before, after` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780087-780093](../../../../../../../reference/runtime/host-main.cjs#L780087-L780093) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580332-580338](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580332-L580338) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780087

Chamadas escritas diretamente neste corpo: `.sort`, `after.servers.flatMap`, `before.servers.map`, `new Set`.

SHA-256 do trecho: `a889e09865834c31c343fa26cfaaefb2df5351270a8dfae7550a465e5d93f000`.

### evaluation:580332

Chamadas escritas diretamente neste corpo: `.sort`, `after.servers.flatMap`, `before.servers.map`, `new Set`.

SHA-256 do trecho: `a889e09865834c31c343fa26cfaaefb2df5351270a8dfae7550a465e5d93f000`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
