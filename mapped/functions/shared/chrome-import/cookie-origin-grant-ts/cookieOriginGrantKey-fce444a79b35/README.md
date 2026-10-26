# `cookieOriginGrantKey`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/chrome-import/cookie-origin-grant.ts` · [README do módulo](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485881-485883](../../../../../../reference/runtime/host-main.cjs#L485881-L485883) | `FunctionDeclaration` | não | `grant` |
| [evaluation:574566-574568](../../../../../../reference/runtime/sand-eval-runner.cjs#L574566-L574568) | `FunctionDeclaration` | não | `grant` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485881-485883](../../../../../../reference/runtime/host-main.cjs#L485881-L485883) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574566-574568](../../../../../../reference/runtime/sand-eval-runner.cjs#L574566-L574568) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485881

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `8bf1ee736715a1dd794d6395ac6410ebf398a5e839ff76777ff0831a21d518ca`.

### evaluation:574566

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `8bf1ee736715a1dd794d6395ac6410ebf398a5e839ff76777ff0831a21d518ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
