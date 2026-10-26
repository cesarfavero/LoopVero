# `parseChromeProfileId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/chrome-import/cookie-origin-grant.ts` · [README do módulo](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485853-485857](../../../../../../reference/runtime/host-main.cjs#L485853-L485857) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574553-574557](../../../../../../reference/runtime/sand-eval-runner.cjs#L574553-L574557) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485853-485857](../../../../../../reference/runtime/host-main.cjs#L485853-L485857) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574553-574557](../../../../../../reference/runtime/sand-eval-runner.cjs#L574553-L574557) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:485853

Chamadas escritas diretamente neste corpo: `brandParsedString`, `raw.trim`.

SHA-256 do trecho: `743f5177b70ad58b654f7cae0fd146cf5ab243aab9988aac5e3b2904de86f8dd`.

### evaluation:574553

Chamadas escritas diretamente neste corpo: `brandParsedString`, `raw.trim`.

SHA-256 do trecho: `743f5177b70ad58b654f7cae0fd146cf5ab243aab9988aac5e3b2904de86f8dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
