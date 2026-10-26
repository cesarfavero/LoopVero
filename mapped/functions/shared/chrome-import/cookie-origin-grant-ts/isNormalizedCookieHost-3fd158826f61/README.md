# `isNormalizedCookieHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/chrome-import/cookie-origin-grant.ts` · [README do módulo](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485858-485860](../../../../../../reference/runtime/host-main.cjs#L485858-L485860) | `FunctionDeclaration` | não | `host` |
| [evaluation:574558-574560](../../../../../../reference/runtime/sand-eval-runner.cjs#L574558-L574560) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485858-485860](../../../../../../reference/runtime/host-main.cjs#L485858-L485860) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574558-574560](../../../../../../reference/runtime/sand-eval-runner.cjs#L574558-L574560) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485858

Chamadas escritas diretamente neste corpo: `chromeCookieAllowHost`.

SHA-256 do trecho: `74dcf6665d9c4edabf4f8810b5de1685deb60917c2fd78dc1a4486cdb90eced3`.

### evaluation:574558

Chamadas escritas diretamente neste corpo: `chromeCookieAllowHost`.

SHA-256 do trecho: `74dcf6665d9c4edabf4f8810b5de1685deb60917c2fd78dc1a4486cdb90eced3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
