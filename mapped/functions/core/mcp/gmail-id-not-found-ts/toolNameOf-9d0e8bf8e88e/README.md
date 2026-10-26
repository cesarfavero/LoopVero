# `toolNameOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-id-not-found.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584483-584486](../../../../../../reference/runtime/sand-eval-runner.cjs#L584483-L584486) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584483-584486](../../../../../../reference/runtime/sand-eval-runner.cjs#L584483-L584486) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584483

Chamadas escritas diretamente neste corpo: `args.name.lastIndexOf`, `args.name.slice`.

SHA-256 do trecho: `30571417d88abd11e1c037425bb6d137ab45ee1b5a1bc6208d346cf4a54f7c55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
