# `isAdminCeilingLock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/in-app-links-guidance.ts` · [README do módulo](../../../../../modules/core/runner/in-app-links-guidance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557680-557682](../../../../../../reference/runtime/host-main.cjs#L557680-L557682) | `FunctionDeclaration` | não | `row` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557680-557682](../../../../../../reference/runtime/host-main.cjs#L557680-L557682) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:557680

Chamadas escritas diretamente neste corpo: `row.adminLock.copy.includes`.

SHA-256 do trecho: `a532cddd9d4dcf6b860da50db7777508a949356a7f9738ccc55539cb2e6dd29a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
