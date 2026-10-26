# `refusedParentOr2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453637-453641](../../../../../reference/runtime/host-main.cjs#L453637-L453641) | `FunctionDeclaration` | sim | `error64, entry, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453637-453641](../../../../../reference/runtime/host-main.cjs#L453637-L453641) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:453637

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `holdsLink`, `new NoFollowRefusedError`.

SHA-256 do trecho: `3f0e9c900490501c564b7e561168c06d411ada540153cc9bfac49185e280d805`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
