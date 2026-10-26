# `normalizedTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732566-732569](../../../../../../../reference/runtime/host-main.cjs#L732566-L732569) | `FunctionDeclaration` | não | `target` |
| [evaluation:539578-539581](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539578-L539581) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732566-732569](../../../../../../../reference/runtime/host-main.cjs#L732566-L732569) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539578-539581](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539578-L539581) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:732566

Chamadas escritas diretamente neste corpo: `URL.canParse`, `WEB_LINK.test`, `new URL`, `target.toLowerCase`.

SHA-256 do trecho: `72efad7547912f14ad9d66af613088219769d9fdb2f0fec201f140b291d5e5fb`.

### evaluation:539578

Chamadas escritas diretamente neste corpo: `URL.canParse`, `WEB_LINK.test`, `new URL`, `target.toLowerCase`.

SHA-256 do trecho: `72efad7547912f14ad9d66af613088219769d9fdb2f0fec201f140b291d5e5fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
