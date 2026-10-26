# `describeZodIssues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/parse/zod-wire.ts` · [README do módulo](../../../../../modules/shared/parse/zod-wire-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485944-485948](../../../../../../reference/runtime/host-main.cjs#L485944-L485948) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485944-485948](../../../../../../reference/runtime/host-main.cjs#L485944-L485948) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485944

Chamadas escritas diretamente neste corpo: `.join`, `error64.issues.map`.

SHA-256 do trecho: `db7a96f82b0b7080d6aa056dc5cda915c2d832593e92f4587f45435f8a6a5d03`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
