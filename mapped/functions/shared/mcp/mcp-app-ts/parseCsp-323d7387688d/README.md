# `parseCsp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-app.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486817-486830](../../../../../../reference/runtime/host-main.cjs#L486817-L486830) | `FunctionDeclaration` | não | `value` |
| [evaluation:495133-495146](../../../../../../reference/runtime/sand-eval-runner.cjs#L495133-L495146) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486817-486830](../../../../../../reference/runtime/host-main.cjs#L486817-L486830) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495133-495146](../../../../../../reference/runtime/sand-eval-runner.cjs#L495133-L495146) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:486817

Chamadas escritas diretamente neste corpo: `Object.keys`, `cspSourceList`, `isUnknownRecord2`.

SHA-256 do trecho: `a2d75c1e5d75c06c68cd4edc6a4565c163f1ec090007e3a01653ffbd974fb030`.

### evaluation:495133

Chamadas escritas diretamente neste corpo: `Object.keys`, `cspSourceList`, `isUnknownRecord2`.

SHA-256 do trecho: `a2d75c1e5d75c06c68cd4edc6a4565c163f1ec090007e3a01653ffbd974fb030`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
