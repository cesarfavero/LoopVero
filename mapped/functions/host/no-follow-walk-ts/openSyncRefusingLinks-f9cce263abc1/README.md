# `openSyncRefusingLinks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453628-453636](../../../../../reference/runtime/host-main.cjs#L453628-L453636) | `FunctionDeclaration` | não | `entry, path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453628-453636](../../../../../reference/runtime/host-main.cjs#L453628-L453636) | 1 | 0 | 0 | 1 | 1 | 1 |

### host:453628

Chamadas escritas diretamente neste corpo: `.isSymbolicLink`, `findSystemErrno`, `new NoFollowRefusedError`.

Alvos de lançamento explícito: `ConditionalExpression`.

SHA-256 do trecho: `8f511f0273a2102f891668710d897336dfbf4ba3ae856fffcc02e594b1ba1702`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
