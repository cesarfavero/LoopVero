# `dynamicToolCallErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/tools/mcp-meta-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761844-761848](../../../../../../../reference/runtime/host-main.cjs#L761844-L761848) | `FunctionDeclaration` | não | `error64` |
| [evaluation:554118-554122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554118-L554122) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761844-761848](../../../../../../../reference/runtime/host-main.cjs#L761844-L761848) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:554118-554122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554118-L554122) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:761844

Chamadas escritas diretamente neste corpo: `errorLogTag`.

SHA-256 do trecho: `a8e76e471f4c5c1cbc16595b5d61a6b43308976b067b6ecb72e9d3979a24fdc4`.

### evaluation:554118

Chamadas escritas diretamente neste corpo: `errorLogTag`.

SHA-256 do trecho: `92c6f0591366721f51883ef9e1386690e6c8b08ad1429aa211fe305b750429b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
