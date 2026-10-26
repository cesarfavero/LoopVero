# `readHtml`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732518-732530](../../../../../../../reference/runtime/host-main.cjs#L732518-L732530) | `FunctionDeclaration` | não | `html` |
| [evaluation:539530-539542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539530-L539542) | `FunctionDeclaration` | não | `html` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732518-732530](../../../../../../../reference/runtime/host-main.cjs#L732518-L732530) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539530-539542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539530-L539542) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:732518

Chamadas escritas diretamente neste corpo: `closeLink`, `decodeEntities`, `html.replace`, `parseTag`, `readTag`, `readText3`, `visible.matchAll`, `visible.slice`.

Alvos de atribuição ou incremento: `cursor`.

SHA-256 do trecho: `fb59b8f1aef7f896bb86d2c20b2702e3b26ed26d186812c1e8a94bff07e909a6`.

### evaluation:539530

Chamadas escritas diretamente neste corpo: `closeLink`, `decodeEntities`, `html.replace`, `parseTag`, `readTag`, `readText`, `visible.matchAll`, `visible.slice`.

Alvos de atribuição ou incremento: `cursor`.

SHA-256 do trecho: `474c683d2346aa9424b4d337ba7f20ef0492dd7a5062c01bf784acfa59b45ca1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
