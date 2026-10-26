# `decodeMcpAccountLabelArgument`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226008-226018](../../../../../../reference/runtime/host-main.cjs#L226008-L226018) | `FunctionDeclaration` | não | `rawArgument` |
| [evaluation:495231-495241](../../../../../../reference/runtime/sand-eval-runner.cjs#L495231-L495241) | `FunctionDeclaration` | não | `rawArgument` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226008-226018](../../../../../../reference/runtime/host-main.cjs#L226008-L226018) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:495231-495241](../../../../../../reference/runtime/sand-eval-runner.cjs#L495231-L495241) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:226008

Chamadas escritas diretamente neste corpo: `JSON.parse`, `rawArgument.trim`, `value.endsWith`, `value.startsWith`.

SHA-256 do trecho: `77a117c291696371324d50c43b271d864d6a0ac05c397b315fe74e4a9ecdd7d1`.

### evaluation:495231

Chamadas escritas diretamente neste corpo: `JSON.parse`, `rawArgument.trim`, `value.endsWith`, `value.startsWith`.

SHA-256 do trecho: `c9f78ec816fb7e7deb4ef4f0cffdd310af53db039493751b70bb587ceb69e460`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
